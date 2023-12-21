import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./screen/signin/Signin";
import Login from "./screen/login/Login";
import Forgot from "./screen/forgot/Forgot";
import Home from "./screen/home/Home"
import Welcome from "./screen/welcome/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot/>}/>
          <Route path="/home/:name" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
