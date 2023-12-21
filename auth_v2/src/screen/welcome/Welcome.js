import React from "react";
import Nav from "../../component/nav/Nav";
import Footer from "../../component/footer/Footer";


export default function Welcome() {
  return (
    <div className="flex flex-col min-h-screen">
  <Nav className="bg-gray-800 text-white p-4" />
  
  <div className="flex-grow">
    <ul>
    <p className="m-4 mt-10">The app primarily concentrates on user authentication through sign-in and login processes. Its main focus revolves around CRUD (Create, Read, Update, Delete) functionalities, which allow users to interact with and manipulate data within the application. This means users can create new data entries, retrieve and read existing information, update data as needed, and delete records when necessary. The emphasis lies on securing user access while enabling efficient management and interaction with data through these fundamental CRUD operations.</p>
    <p className="m-4">The app is built using React for the front-end view, Node.js/Express for the server-side functionality, and MongoDB as the database. It's styled with Tailwind CSS. You can find the code for both parts available on my GitHub repository.</p>
    <p className="m-4">You can visit my Project that hosted on vercel <a href="https://thoughts-lake.vercel.app/" alt="minds" className="hover:underline me-4 md:me-6 text-blue-700">Thoughts-minds</a></p>
    <p className="m-4">My Linkedin profile <a href="https://www.linkedin.com/in/vasanthakumar-kathiresan" className="hover:underline me-4 md:me-6 text-blue-700">vasanthakumar</a></p>
    <p className="m-4">OTP validation is facilitated through Nodemailer, an API hosted on Render. I've provided a link feel free to use it and provide me with some feedback <a href="https://one-time-password.onrender.com/" alt="otp" className="hover:underline me-4 md:me-6 text-blue-700">OTP-sender</a></p>
    <p className="m-4">OTP validation has been added as a new feature, along with additional password validations. My previously deployed application is running on Vercel. You can visit it <a href="https://authentication-one-ashy.vercel.app/" alt="minds" className="hover:underline me-4 md:me-6 text-blue-700">Authentication v-1</a> </p>
    </ul>
  </div>

  <Footer className="bg-gray-200 p-4" />
</div>

  );
}
