import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import TextArea from "../components/TextArea";
import { toast } from "react-toastify";

export default function Chat() {
  const navigate = useNavigate();
  const location = useLocation();
  // const name = location.state?.name ?? "Folks"; //OPTIONAL CHAINING it check if it defined or not
  const name = location.state?.name;
  if(!name){
    sessionStorage.removeItem("token")
    navigate("/login")
  }
  const [prompt, setPrompt] = useState("");
  const [promptresult, setPromptResult] = useState("");
  const [loading,setLoading]=useState(false)

  const handlefind = async (e) => {
    e.preventDefault();
    const token = JSON.parse(sessionStorage.getItem("token")) || null;
    try {
      setLoading(true)
      const response = await fetch("https://inte-gem.onrender.com/api/cprompt", {
        method: "POST",
        body: JSON.stringify({ prompt: prompt }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          auth: token,
        },
      });
      setLoading(false)
      if(response.status===400){
        toast.error("Harmful request blocked");
        setPromptResult("Sorry, your prompt may contain harmful content, due to safety reasons it has been neglected by Inte-Gem. Please use some other prompt")
      }
      else{
      const result = await response.json();
      // result.replace(/\n/g,'\n');
      // result1.replace(/\n\n/g,'\n\n');
      setPromptResult(result);
      // console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
    // console.log(prompt)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hi {name}</h1>

      <form onSubmit={handlefind} className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Enter your prompt here
        </label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Find
        </button>
      </form>
      {
      loading?(<Skeleton/>):(<TextArea prompt={promptresult}/>)
      }
      <div className="flex justify-end">
      <button
        onClick={() => navigate("/home", { state: { name: name } })}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 w-36"
      >
        Back
      </button>
      </div>
    </div>
  );
}
