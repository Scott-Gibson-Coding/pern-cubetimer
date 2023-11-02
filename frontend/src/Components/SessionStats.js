import React, { useContext } from "react";
import { TimesContext } from "../CubetimerPage";
import SolvetimesTable from "./SolvetimesTable";
import SummaryTable from "./SummaryCard";

const SessionStats = () => {
  const { times, setTimes } = useContext(TimesContext);

  const deleteAllTimes = () => {
    const url = "http://localhost:5050/solvetimes";
    fetch(url, { method: "DELETE" })
      .then((response) => {
        console.log(response);
        setTimes([]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <p className="text-center m-0">Session stats for</p>
      <h1 className="text-center fs-4">3x3 Rubik's Cube</h1>
      <a href="" className="text-center" onClick={deleteAllTimes}>
        clear times
      </a>
      <SolvetimesTable />
      <SummaryTable />
    </div>
  );
};

export default SessionStats;
