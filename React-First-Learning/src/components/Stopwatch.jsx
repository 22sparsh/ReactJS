import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [Laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  const reset = () => {
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div>
      <h1 className="font-black text-8xl">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}:
        {String(milliseconds).padStart(2, "0")}
      </h1>

      <button
        className="active:scale-95 p-3 bg-green-900 text-2xl ml-1 rounded-2xl"
        onClick={() => setRunning(true)}
      >
        Start
      </button>
      <button
        className="active:scale-95 p-3 bg-green-900 text-2xl ml-1 rounded-2xl"
        onClick={() => {
          if (running) {
            let currentLap = `${String(minutes).padStart(2, "0")}:
        ${String(seconds).padStart(2, "0")}:
        ${String(milliseconds).padStart(2, "0")}`;
            setLaps((prevLaps) => [...prevLaps, currentLap]);
          }
        }}
      >
        lap
      </button>

      <button
        className="active:scale-95 p-3 bg-green-900 text-2xl ml-1 rounded-2xl"
        onClick={() => setRunning(false)}
      >
        Pause
      </button>

      <button
        className="active:scale-95 p-3 bg-green-900 text-2xl ml-1 rounded-2xl"
        onClick={reset}
      >
        Reset
      </button>
      <div className=" text-4xl mt-12 mb-12 font-black">
        <ul>
          {Laps.map((lap, index) => (
            <li key={index}>{lap}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stopwatch;
