import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [c, setc] = useState(0);
  // "Pressed" is logged only once because clicking the button sets
  // c to 0 + 0 = 0. Since the state doesn't change, React doesn't
  // re-render, so "Pressed" is logged only once.
  if (c < 3) {
    console.log("Pressed");
  }
  return (
    <>
      <div className="">
        <button
          className="bg-amber-50/50 p-3 rounded-2xl active:scale-50"
          onClick={() => {
            setc(c + c);
          }}
        >
          {c}
        </button>
      </div>
    </>
  );
}

export default App;
