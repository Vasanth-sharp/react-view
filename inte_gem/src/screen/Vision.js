import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import TextArea from "../components/TextArea";
import { toast } from "react-toastify";

export default function Vision() {
  const location = useLocation();
  const navigate = useNavigate();
  // const name = location.state?.name ?? "Folks"; //OPTIONAL CHAINING it check if it defined or not
  const name = location.state?.name;
  if (!name) {
    sessionStorage.removeItem("token");
    navigate("/login");
  }
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState("");
  const [mime, setMime] = useState("");
  const [promptresult, setPromptResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [disab, setDisab] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(sessionStorage.getItem("token")) || null;
    try {
      setLoading(true);
      toast.info("depend on size it takes time..");
      const response = await fetch(
        "https://inte-gem.onrender.com/api/vprompt",
        {
          method: "POST",
          body: JSON.stringify({
            prompt: prompt,
            mimeType: mime,
            image: base64,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            auth: token,
          },
        }
      );
      setLoading(false);

      if (response.status === 400) {
        toast.error("Harmful request blocked");
        setPromptResult("Sorry, your prompt or image may contain harmful content due to safety reasons. It has been neglected by Inte-Gem. Please use some other picture or prompt")
      } else if(response.status===413){
        toast.error("Image got rejected")
        setPromptResult("Sorry, due to some reason it rejected by inte-gem")
      }else {
        const result = await response.json();

        setPromptResult(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.size > 100000) {
      toast.warning("image size should less than 100kb");
      setDisab(true);
    } else if (selectedFile) {
      setDisab(false);
      // console.log("hi");
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result;
        setBase64(base64String.split(",")[1]);
        setMime(selectedFile.type);
        setFile({
          name: selectedFile.name,
          type: selectedFile.type,
          size: selectedFile.size,
          base64: base64String,
        });
      };

      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md">
      <p className="text-2xl font-bold text-blue-500 mb-4">Hi, {name}</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">
            Enter your prompt here
          </label>
          <input
            type="text"
            required
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 px-4 py-2 block w-full rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Upload File</label>
          <input
            type="file"
            onChange={handleChange}
            required
            className="mt-1 px-4 py-2 block w-full cursor-pointer rounded-md bg-gray-100 border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5 
      ${disab ? "cursor-not-allowed opacity-50" : "hover:cursor-pointer"}`}
          disabled={disab}
        >
          Submit
        </button>
      </form>
      {loading? <Skeleton /> : <TextArea prompt={promptresult} />}
      {file && (
        <div className="mt-8 border rounded-lg shadow-md p-4 bg-white mb-5">
          <p className="text-lg font-semibold text-blue-500 mb-2">
            File Details:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
          <img
            src={file.base64}
            alt="Preview"
            className="mt-4 rounded-lg shadow-md"
          />
        </div>
      )}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/home", { state: { name } })}
          className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Back
        </button>
      </div>
    </div>
  );
}
