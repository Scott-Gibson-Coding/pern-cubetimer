import React, { useContext } from "react";
import { TimesContext } from "../CubetimerPage";
import SolvetimesTable from "./SolvetimesTable";
import SummaryTable from "./SummaryCard";

const SessionStats = ({ updateTimes }) => {
  const times = useContext(TimesContext);

  const deleteAllTimes = () => {
    const url = "http://localhost:5050/solvetimes";
    fetch(url, { method: "DELETE" })
      .then((response) => {
        console.log(response);
        updateTimes([]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   const url = "http://localhost:5050/solvetimes";

  return (
    <div className="container">
      <p className="text-center m-0">Session stats for</p>
      <h1 className="text-center fs-4">3x3 Rubik's Cube</h1>
      <a href="" onClick={deleteAllTimes}>
        clear times
      </a>
      <SolvetimesTable updateTimes={updateTimes} />
      <SummaryTable />
    </div>
  );
};

export default SessionStats;
