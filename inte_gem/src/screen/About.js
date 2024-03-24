import React from "react";
import image from "../assets/trio.jpg";
export default function About() {
  return (
    <div>
      <span class="inline-block mt-4 font-bold text-3xl sm:text-4xl ml-7 border-b-4 border-indigo-900 rounded">
        Team<span class="text-red-600"> vsv</span>
      </span>
      <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src={image} alt="pic" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About me
            </span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              vasanthakumar<span class="text-indigo-600"> kathiresan</span>
            </h2>
            <p class="text-gray-700">
              Hi folks, I have completed several projects in MERN and gained
              experience in developing web apps. I have hosted my web apps on
              Vercel and Render services. Below are the links, feel free to
              visit and provide feedback
            </p>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-7">
              <a
                href="https://authentication-ver2.vercel.app/"
                rel="noopener noreferrer"
                target="_blank"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
              >
                Authentication system
              </a>
              <a
                href="https://authentication-ver2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
              >
                Thoughts
              </a>
              <a
                href="https://todos-nine-blue.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
              >
                Todo's
              </a>
              <a
                href="https://react-secondary-deployment.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
              >
                Bmi calculator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
