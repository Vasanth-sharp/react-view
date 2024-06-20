import "./App.css";
import Home from "./Home";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Payment from "./Payment";
import Protect from "./Protect";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from "react";

const productsContext=createContext()
function App() {
  const [products,setProducts]=useState(["vasant","vinoth","sehwag"])
  return (
    <productsContext.Provider value={products}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route element={<Protect />}>
            <Route path="/pay" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </productsContext.Provider>
  );
}

export default App;
export {productsContext}
