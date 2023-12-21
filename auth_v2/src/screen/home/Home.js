import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const { name } = useParams();
  const [response, setResponse] = useState([]);

  const navigate=useNavigate()
  useEffect(() => {
    fetch(`https://authentication-api-x1bi.onrender.com/api/${name}`)
      .then((res) => res.json())
      .then((res) => setResponse(res));
  }, [name]);
  let password = "";
  password += response.password;
  let first = password.slice(0, 2);
  let masked = first.padEnd(password.length, "*");
  return (
    <div className="Home flex items-center justify-center h-screen">
      {response && (
        <div>
          <div class="px-4 sm:px-0">
            <h3 class="text-center text-gray-900 text-2xl">
              Hi {response.name}
            </h3>
          </div>
          <div class="mt-6 border-t border-gray-100">
            <dl class="divide-y divide-gray-100">
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {response.name}
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  password
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {masked}
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {response.email}
                </dd>
              </div>
              <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </dt>
                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {response.phone}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-start">
            <button onClick={()=>{navigate("/login")}} className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Back to login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
