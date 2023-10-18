import React, { useState, useEffect } from "react";
import { getScramble } from "../Utils/CubeUtils";

const Timer = () => {
  const [scramble, setScramble] = useState("getting scramble...");
  const [start, setStart] = useState(0);
  const [time, setTime] = useState(0);

  // get scramble on page load
  useEffect(() => {
    setScramble(getScramble());
    setStart(window.performance.now());
  }, []);

  // create interval for timer
  useEffect(() => {
    const dur = 37;
    const interval = setInterval(() => {
      setTime(window.performance.now() - start);
    }, dur);

    return () => clearInterval(interval);
  }, [time]);

  /* PAGE CONTENT */
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div className="container">
        <h1 className="fs-1">Cubetimer</h1>
        <div className="bg-secondary text-white text-center font-monospace">
          {scramble}
        </div>
        <div className="bg-secondary text-white text-center font-monospace">
          real time: {(time / 1000).toFixed(3)}
        </div>
        <h1 className="text-center fst-italic">{"00:00.000"}</h1>
      </div>

      <div className="container my-3">
        <p className="text-center fst-italic fw-bold">
          Press space to start timer
        </p>
      </div>
    </div>
  );
};

export default Timer;
