import "./App.css";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Card from "./components/Cards/Card"

function App() {  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}> </Route>

      <Route path="/about" element={<Card />}>  
      </Route>
    </Routes>
    </>
  );
}

export default App;
