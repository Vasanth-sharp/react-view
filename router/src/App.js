import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Order from "./components/Order";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Cod from "./components/Cod";
import NetBanking from "./components/Netbanking";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/user/:id" element={<Users />} />
          {/* <Route path="/order/cod" element={< Cod/>} />
          <Route path="/order/netbanking" element={<NetBanking/>}/> */}
          <Route path="/order">
            <Route path="cod" element={<Cod/>}/>
            <Route path="netbanking" element={<NetBanking/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
