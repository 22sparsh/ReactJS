import "./App.css";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Card from "./components/Cards/Card"
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import { useState } from "react";

function App() {  
  const [theme, setTheme] = useState("Dark")
  return (
    <div> 
    <NavBar theme={theme} setTheme={setTheme}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/product" element={<Product />} > 
      <Route path="women" element={<Women />} /></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <h1 className="text-4xl">Theme is {theme}</h1>
    </div>
  );
}

export default App;
