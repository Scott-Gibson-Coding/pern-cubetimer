import React, { useState, useEffect } from "react";

const Timer = () => {
  return (
    <div className="container">
      <h1 className="fs-1">Cubetimer</h1>
      <div className="bg-secondary text-white text-center font-monospace">
        Scramble goes here...
      </div>
      <h1 className="text-center fst-italic">00:00.00</h1>
    </div>
  );
};

export default Timer;
