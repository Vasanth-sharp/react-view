import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const date=new Date()
    const year=date.getFullYear()
  return (
<footer class="border-gray-200 dark:bg-gray-900">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://github.com/Vasanth-sharp" class="hover:underline">Vasanth™</a>. vasanthakumar kathiresan
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/signin" class="hover:underline me-4 md:me-6">Signin</Link>
        </li>
        <li>
            <Link to="/login" class="hover:underline me-4 md:me-6">Login</Link>
        </li>
        <li>
            <Link to="/forgot" class="hover:underline me-4 md:me-6">Forgot</Link>
        </li>
    </ul>
    </div>
</footer>
  )
}
