import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import AuthUser from "./components/AuthUser";
import Home from "./screens/Home";
import Payment from "./screens/Payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreAbout from "./screens/MoreAbout";
import User from "./screens/User";
import ErrorPage from "./screens/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
      <Navbar/>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<AuthUser />}>
            <Route path="/home" element={<Home />} />
            <Route path="/more" element={<MoreAbout />} />
            <Route path="/gateway" element={<Payment />} />
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
