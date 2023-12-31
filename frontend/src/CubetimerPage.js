import React, { useState, useEffect, createContext } from "react";
import Timer from "./Components/Timer";
import SessionStats from "./Components/SessionStats";

export const TimesContext = createContext([]);

const CubetimerPage = () => {
  /* State Variables */
  const [times, setTimes] = useState([]);

  /* useEffect calls */
  useEffect(() => {
    // on page load, request the solves from db
    const url = "http://localhost:5050/solvetimes";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTimes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /* Callback function - pass to Timer component */
  const addTime = async (time) => {
    const url = "http://localhost:5050/solvetimes";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ solvetime: time }),
    })
      .then((response) => response.json())
      .then(({ time_id, solvetime }) => {
        const newTime = { time_id: time_id, solvetime: solvetime };
        setTimes((prevTimes) => [newTime, ...prevTimes]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9 border border-3 border-primary">
          <Timer addTime={addTime} />
        </div>
        <div className="col-3 border border-3 border-success">
          <TimesContext.Provider value={{ times, setTimes }}>
            <SessionStats />
          </TimesContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default CubetimerPage;
