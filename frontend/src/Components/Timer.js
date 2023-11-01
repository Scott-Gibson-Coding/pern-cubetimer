import React, { useState, useEffect, useRef } from "react";
import { getScramble, formatTime } from "../Utils/CubeUtils";

const Timer = (props) => {
  /*
   * props
   *   addTime: function from CubetimerPage that updates the
   *   session with a new time.
   */
  const { addTime } = props;

  /* State vars */

  const [scramble, setScramble] = useState(getScramble);
  const [timerText, setTimerText] = useState("00:00.000");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const [keyDownHeld, setKeyDownHeld] = useState(false); //

  // reference var for the timer interval
  let intervalRef = useRef(0);

  /* Timer text formatting */

  useEffect(() => {
    setTimerText(formatTime(time));
  }, [time]);

  /* Spacebar interactivity */

  const handleSpaceUp = () => {
    if (!running) {
      const fps = 60; // how often the timer updates per second
      const start = performance.now();
      intervalRef.current = setInterval(() => {
        setTime(performance.now() - start);
      }, 1000 / fps);
    }
    setRunning((running) => !running);
  };
  const handleSpaceDown = () => {
    if (intervalRef.current !== 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = 0;
      addTime(Math.round(time));
      setScramble(() => getScramble());
    }
  };

  /* Document keyboard event handling */

  document.onkeyup = (e) => {
    if (e.key === " ") {
      handleSpaceUp();
      setKeyDownHeld(false);
    }
  };
  document.onkeydown = (e) => {
    if (!keyDownHeld && e.key === " ") {
      handleSpaceDown();
      setKeyDownHeld(true);
    }
  };

  /* PAGE CONTENT */

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
      <div className="container">
        <h1 className="fs-1">Cubetimer</h1>
        <div className="bg-secondary text-white text-center font-monospace">
          {scramble}
        </div>
        <h1 className="text-center fst-italic font-monospace">{timerText}</h1>
      </div>

      <div className="container my-3">
        <p className="text-center fst-italic fw-bold font-monospace">
          Press space to start timer
        </p>
      </div>
    </div>
  );
};

export default Timer;
