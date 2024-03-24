import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";

export default function Home() {
  const [history, setHistory] = useState([]);
  const [selectedmodel, setSelectedModel] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // const name = location.state?.name ?? "Folks"; //OPTIONAL CHAINING it check if it defined or not
  const name = location.state?.name;
  if (!name) {
    sessionStorage.removeItem("token");
    navigate("/login");
  }
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const getHistory = async () => {
      const token = JSON.parse(sessionStorage.getItem("token")) || null;
      try {
        setLoading(true);
        const response = await fetch(
          "https://inte-gem.onrender.com/api/history",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              auth: token,
            },
          }
        );
        setLoading(false);
        const result = await response.json();
        setHistory(result);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    getHistory(); //function call
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedmodel === 1 + "") {
      navigate("/chat", { state: { name: name } });
    } else if (selectedmodel === 2 + "") {
      navigate("/vison", { state: { name: name } });
    }
  };

  const handleSignout = () => {
    toast.success("signed out");
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  const handleDelete = () => {
    const token = JSON.parse(sessionStorage.getItem("token")) || null;
    setLoading(true);
    fetch("https://inte-gem.onrender.com/api/delete", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        auth: token,
      },
    }).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        toast.success("Deleted succesfully");
        sessionStorage.removeItem("token");
        navigate("/login");
      }
    });
  };
  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="text-xl font-bold text-blue-500 mb-3 block">
          Select your model preference
        </label>
        <select
          value={selectedmodel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">--select--</option>
          <option value="1">gemini-pro</option>
          <option value="2">gemini-pro-vision</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        >
          Submit
        </button>
      </form>

      {loading ? 
        <Loader/>
       : (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Hi {name}, your search history
          </h1>
          <ul className="list-disc list-inside my-2">
            {history.length > 0 &&
              history.map((prompt, index) => (
                <li key={index} className="ml-4">
                  {prompt.textprompt}
                </li>
              ))}
          </ul>
        </>
      )}

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSignout}
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Sign Out
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
