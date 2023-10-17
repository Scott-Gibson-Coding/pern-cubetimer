import React from "react";
import SolvetimesTable from "./SolvetimesTable";
import SummaryTable from "./SummaryCard";

const SessionStats = () => {
  return (
    <div className="container">
      <p className="text-center m-0">Session stats for</p>
      <h1 className="text-center fs-4">3x3 Rubik's Cube</h1>
      <SolvetimesTable />
      <SummaryTable />
    </div>
  );
};

export default SessionStats;
