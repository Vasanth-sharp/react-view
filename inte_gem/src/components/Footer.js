import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ai.png";

export default function Footer() {
  return (
    <>
      <footer class="bg-white dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/login"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} class="h-8" alt="integem Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Inte_Gem
              </span>
            </Link>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/about" class="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vasanthakumar-kathiresan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Vasanth-sharp"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline me-4 md:me-6"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://www.linkedin.com/in/vasanthakumar-kathiresan/"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            >
              vasanthakumar kathiresan
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
