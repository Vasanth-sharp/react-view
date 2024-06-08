import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function User() {
  const [userData, setUserData] = useState({});
  const navigate=useNavigate()
  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    fetch("https://v-cart.onrender.com/api/history", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        token: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserData(res);
        console.log(res.his);
      })
      .catch((err) => console.error(err));
  }, []);
  const logout=()=>{
    sessionStorage.clear()
    toast.success("Logout succesfully")
    navigate("/")
  }
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Hi, {userData.name}</h1>
      {userData &&
        userData.his?.map((prod, index) => (
          <div key={index} className="border-b border-gray-300 mb-4 pb-4">
            <h2 className="text-xl font-semibold">{prod.product}</h2>
            <ul className="mt-2">
              <li className="text-gray-700">
                <span className="font-semibold">Price:</span> {prod.price}
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Payment Method:</span>{" "}
                {prod.paymentMethod}
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Payment ID:</span>{" "}
                {prod.paymentId}
              </li>
            </ul>
          </div>
        ))}
        <div>
          <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Log out</button>
        </div>
    </div>
  );
}
