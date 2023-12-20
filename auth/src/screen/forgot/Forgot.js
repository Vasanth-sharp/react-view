import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from 'react-spinner-loader';

export default function Forgot() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const data = { name, password: npassword };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    function encrypt(text, shift) {
      return text
        .split("")
        .map((char) => {
          if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const isUpperCase = char === char.toUpperCase();
            const shiftAmount = isUpperCase ? 65 : 97;
            return String.fromCharCode(
              ((code - shiftAmount + shift) % 26) + shiftAmount
            );
          } else {
            return char;
          }
        })
        .join("");
    }
    const encryptedName = encrypt(name, 3);

    setLoading(true);
    const fetchCall = await fetch(`https://authentication-api-x1bi.onrender.com/api/${encryptedName}`);
    const jsonResponse = await fetchCall.json();

    if (jsonResponse.password === password) {
      // console.log(`password old:${jsonResponse.password} password entered:${password}`)
      const putCall = await fetch("https://authentication-api-x1bi.onrender.com/api", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const putResponse = putCall.json();
      if (putResponse) {
        setLoading(false);
        toast.success("good");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setLoading(false);
        toast.warning("server");
      }
    } else {
      setLoading(false);
      toast.warning("password is wrong");
    }
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-cinzel leading-9 tracking-tight text-gray-900">
          Forgotten
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
            >
              Name
            </label>
            <div class="mt-2">
              <input
                id="name"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 font-poppins text-center shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={name}
              onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                type="password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm font-poppins text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="npassword"
                class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                New Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="npassword"
                type="password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm font-poppins text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={npassword}
              onChange={(e) => setNpassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold font-poppins leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
          <div className="text-center">
          <Loader show = {loading}/>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
}
