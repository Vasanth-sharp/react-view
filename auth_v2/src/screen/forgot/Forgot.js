import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-spinner-loader";

export default function Forgot() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [npassword, setNpassword] = useState("");
  const [otp, setOtp] = useState("");

  const data = { name, password: npassword };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [buttondisable, setButtondisable] = useState(true);

  const otpGenerator = () => {
    let otp = "";
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 9) + 1;
      otp += randomNum;
    }
    return otp;
  };
  const [sendedotp, setSendedotp] = useState("");
  const handleOtpFetch = async (e) => {
    e.preventDefault();

    let otpData = { email, otp: otpGenerator(), name };

    console.log(otpData.otp);
    setLoading(true);
    fetch("https://one-time-password.onrender.com", {
      method: "POST",
      body: JSON.stringify(otpData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      if (res.status === 200) {
        setLoading(false);
        toast.success("otp sent");
      } else {
        setLoading(false);
        toast.warning("otp failed");
      }
    });
    setSendedotp(otpData.otp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`System = ${sendedotp} userotp= ${otp}`);
    if (Number(sendedotp) === Number(otp)) {
      // console.log(`password old:${jsonResponse.password} password entered:${password}`)
      setLoading(true);
      const putCall = await fetch(
        "https://authentication-api-x1bi.onrender.com/api",
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
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
      toast.warning("Otp is wrong");
    }
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-cinzel leading-9 tracking-tight text-gray-900">
          Forgot password
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
                for="mail"
                class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                Email
              </label>
            </div>
            <div class="mt-2">
              <input
                id="mail"
                type="mail"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm font-poppins text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="otp"
                class="block text-sm font-medium leading-6 text-gray-900 font-poppins"
              >
                OTP
              </label>
            </div>
            <div class="mt-2">
              <input
                id="otp"
                type="number"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm font-poppins text-center ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  if (otp.length >= 5) {
                    setButtondisable(false);
                  } else {
                    setButtondisable(true);
                  }
                }}
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

          <div className="flex justify-evenly">
            <button
              type="submit"
              className={`rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                buttondisable
                  ? "cursor-not-allowed opacity-50"
                  : "hover:cursor-pointer"
              }`}
              disabled={buttondisable}
            >
              submit
            </button>
            <button
              onClick={handleOtpFetch}
              className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              GetOtp
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
