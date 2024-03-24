import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./screen/Welcome";
import Login from "./screen/Login";
import Protect from "./components/Protect";
import Home from "./screen/Home";
import Chat from "./screen/Chat";
import Vision from "./screen/Vision";
import Notfound404 from "./screen/Notfound404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import About from "./screen/About";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route element={<Protect />}>
              <Route path="/home" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/vison" element={<Vision />} />
            </Route>
            <Route path="*" element={<Notfound404 />} />
          </Routes>
        </div>
        <Footer />
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
