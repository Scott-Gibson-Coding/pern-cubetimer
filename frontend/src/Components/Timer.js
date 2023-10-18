import React, { useState, useEffect } from "react";
import { getScramble } from "../Utils/CubeUtils";

const Timer = () => {
  const [scramble, setScramble] = useState("getting scramble...");

  // get scramble on page load
  useEffect(() => {
    setScramble(getScramble());
  }, []);

  /* PAGE CONTENT */
  return (
    <div className="container">
      <h1 className="fs-1">Cubetimer</h1>
      <div className="bg-secondary text-white text-center font-monospace">
        {scramble}
      </div>
      <h1 className="text-center fst-italic">00:00.00</h1>
    </div>
  );
};

export default Timer;
