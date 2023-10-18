import React from "react";

const SummaryCard = () => {
  return (
    <div className="container bg-light border border-2 border-dark">
      <div className="row text-end">
        <div className="col">Average: {"00:00.00"}</div>
        <div className="col">Best: {"00:00.00"}</div>
      </div>
      <div className="row text-end">
        <div className="col">Avg of 5: {"00:00.00"}</div>
        <div className="col">3 of 5: {"00:00.00"}</div>
      </div>
      <div className="row text-end">
        <div className="col">Avg 10: {"00:00.00"}</div>
        <div className="col">10 of 12: {"00:00.00"}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
