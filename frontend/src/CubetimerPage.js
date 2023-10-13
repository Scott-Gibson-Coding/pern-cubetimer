import React from "react";
import Timer from "./Components/Timer";
import SessionStats from "./Components/SessionStats";

const CubetimerPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 border border-3 border-primary">
          <Timer />
        </div>
        <div className="col-4 border border-3 border-success">
          <SessionStats />
        </div>
      </div>
    </div>
  );
};

export default CubetimerPage;
