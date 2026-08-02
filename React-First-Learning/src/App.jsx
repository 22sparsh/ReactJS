import "./App.css";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Card from "./components/Cards/Card"
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Women from "./pages/Women";

function App() {  
  return (
    <div> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} > 
      <Route path="women" element={<Women />} /></Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
