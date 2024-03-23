import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-spinner-loader";

export default function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const data = { name, password, email, phone };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const hasNumericChar = /\d/.test(password);
    const hasAlphabeticChar = /[a-zA-Z]/.test(password);

    const validPass = hasSpecialChar && hasNumericChar && hasAlphabeticChar;

    if (validPass) {
      setLoading(true);
      const fetchCall = await fetch(
        "https://authentication-api-x1bi.onrender.com/api"
      );
      const jsonResponse = await fetchCall.json();
      setLoading(false);
      const nameExist = jsonResponse.some((res) => res.name === name);
      if (nameExist) {
        toast.warning("use different username");
      } else {
        setLoading(true);

        fetch("http://localhost:4000/api/create", {
          method: "POST",
          body: JSON.stringify({
            name:name.trim(),
            password:password,
            email:email
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        
        fetch("https://authentication-api-x1bi.onrender.com/api", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((res) => {
          setLoading(false);
          if (res.status === 200) {
            toast.success("Signed in");
            setTimeout(() => navigate("/login"), 2000);
          }
        });
      }
    } else {
      toast.warning("pasword must contain special char and numeric");
    }
  };

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-cinzel leading-9 tracking-tight text-gray-900">
          Sign in
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 font-poppins shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                Email
              </label>
            </div>
            <div class="mt-2">
              <input
                id="email"
                type="email"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 font-poppins shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              for="phone"
              class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
            >
              Phone
            </label>
            <div class="mt-2">
              <input
                id="phone"
                type="number"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 font-poppins shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                type="password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm font-poppins ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                value={password}
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-poppins font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          <div className="text-center">
            <Loader show={loading} />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
