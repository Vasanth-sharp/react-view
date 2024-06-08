import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center mb-8">Project Overview</h2>

      <div class="flex flex-col gap-4 md:flex-row md:gap-8">
        <div class="rounded-md shadow-2xl p-6 bg-white">
          <h3 class="text-xl font-semibold mb-2">Core Functionalities</h3>
          <p class="text-gray-700 leading-relaxed">
            E-commerce web app are designed to provide users with an experience
            that mirrors the behavior of actual e-commerce platforms. Through
            this process, users gain valuable insights into various aspects of
            e-commerce functionality, such as payment gateway integration and
            token-based authentication. Notably, features like protected routes
            ensure that unauthorized access is prevented, and passwords are
            securely hashed and stored by using npm pacnkages like bcrypt.
          </p>
          <ul class="list-disc list-inside pl-4 text-gray-700 mt-3">
            <li>
              Login{" "}
              <Link to="/login" className="text-blue-800">
                Login
              </Link>
            </li>
            <li>You'll get a mail</li>
            <li>Purchase the products</li>
            <li>Do test payment</li>
          </ul>
          <p class="text-gray-700 mt-4">
            Feel free to use and provide feedback via email that you received.
            The GitHub link is in the footer, and the Auth_V2 link is in the
            navbar . . .
          </p>
        </div>

        <div class="rounded-lg shadow-2xl p-6 bg-white box-border">
          <h3 class="text-xl font-semibold mb-2">Tech Stack</h3>
          <p class="text-gray-700 leading-relaxed">
            The Web application tech stack for a smooth user experience:
          </p>
          <ul class="flex items-center gap-4">
            <li class="fas fa-code text-blue-500"> React</li>
            <li class="fas fa-server text-green-500">Node.js/Express</li>
            <li class="fas fa-database text-purple-500"> MongoDB</li>
          </ul>
          <ul className="flex items-center gap-4 mt-6">
            <li class="fas fa-code text-blue-500">JWT</li>
            <li class="fas fa-code text-purple-600">Razor Pay</li>
            <li class="fas fa-code text-blue-500">Bcrypt</li>
            <li class="fas fa-css3 text-sky-500"> Tailwind CSS</li>
          </ul>
          <p class="text-gray-700 mt-4">
            You can find the code on my GitHub repository for further
            exploration.
          </p>
        </div>
      </div>

      <div class="text-center mt-8">
        <h3 class="text-xl font-semibold mb-2">Links</h3>
        <ul class="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <li>
            <a
              href="https://v-cart.onrender.com/api"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-700 hover:underline"
            >
              API (On Render)
            </a>
          </li>
          <Link to="/about" className="text-blue-700 hover:underline">
            More Projects
          </Link>
        </ul>
      </div>
    </div>
  );
}
