import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './screens/home/Home';
import Createpost from './screens/create/Createpost';
import Postdetail from './screens/postdetail/Postdetail';
import Foot from './components/footer/Foot';
import Editpost from './screens/editpost/Editpost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Createpost/>}/>
        <Route path='/post/:id' element={<Postdetail/>}/>
        <Route path='/edit/:id' element={<Editpost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
