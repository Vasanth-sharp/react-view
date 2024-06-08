import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader"

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    const token=JSON.parse(sessionStorage.getItem("token"))||null
    if(token)
      {
        toast.success("good to go in")
        navigate("/home")
      }
  },[])
  const handleLogin = async (e) => {
    e.preventDefault();

    let data = { name, pass: password };
    try {
      setLoading(true);
      const response = await fetch("https://v-cart.onrender.com/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const result = await response.json();
      setLoading(false);
      if (response.status === 200) {
        sessionStorage.setItem("token", JSON.stringify(result.token));
        toast.success("good to go");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else if (response.status === 404) {
        toast.warning(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div className="text-center">
                <h1 class="text-2xl font-semibold">Login</h1>
              </div>
              <div class="divide-y divide-gray-200">
                <form onSubmit={handleLogin}>
                  <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div class="relative">
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Name"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Name
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        type="password"
                        id="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label
                        for="password"
                        class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Password
                      </label>
                    </div>
                    <div class="relative text-center">
                      <button class="bg-cyan-500 text-white rounded-md px-2 py-1">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {loading && <div style={{textAlign:"center"}}><Loader/></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
