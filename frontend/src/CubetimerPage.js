import React, { useState, useEffect, createContext } from "react";
import Timer from "./Components/Timer";
import SessionStats from "./Components/SessionStats";

export const TimesContext = createContext([]);

const CubetimerPage = () => {
  const times = [11.519, 5.55, 4.33, 1.0, 2.57, 7.54];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 border border-3 border-primary">
          <Timer />
        </div>
        <div className="col-4 border border-3 border-success">
          <TimesContext.Provider value={times}>
            <SessionStats />
          </TimesContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default CubetimerPage;
