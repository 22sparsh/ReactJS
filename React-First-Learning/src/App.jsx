import "./App.css";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Card from "./components/Cards/Card"
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";

function App() {  
  return (
    <div> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </div>
  );
}

export default App;
