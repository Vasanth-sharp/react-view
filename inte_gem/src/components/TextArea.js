import React from 'react'
import { toast } from 'react-toastify'

export default function TextArea(props) {
    const {prompt}=props
    const copyToClipboard=()=>{
      navigator.clipboard.writeText(prompt)
      toast.success("copied to clipboard")
    }
  return (
    <div>
        <textarea
        value={prompt}
        readOnly
        rows={20}
        cols={150}
        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></textarea>
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
      >
        Copy to Clipboard
      </button>
    </div>
  )
}
