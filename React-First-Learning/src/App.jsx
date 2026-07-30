import "./App.css";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Card from "./components/Cards/Card"
import NavBar from "./components/NavBar";

function App() {  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}> </Route>

      <Route path="/about" element={<Card />}>  
      </Route>
    </Routes>
    </>
  );
}

export default App;
