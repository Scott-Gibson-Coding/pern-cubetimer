import React, { useContext } from "react";
import { formatTime } from "../Utils/CubeUtils";
import { TimesContext } from "../CubetimerPage";

const getBest = (times) => {
  if (times.length === 0) {
    return formatTime(0);
  }

  let best = Math.min(...times.map((time) => time.solvetime));
  return formatTime(best);
};

const getAvg = (times) => {
  if (times.length === 0) {
    return formatTime(0);
  }

  let total = 0;
  for (let i = 0; i < times.length; ++i) {
    total += times[i].solvetime;
  }

  return formatTime(total / times.length);
};

const getAvg5 = (times) => {
  if (times.length === 0) {
    return formatTime(0);
  }

  let timesSmall = times.slice(0, 5).map((time) => time.solvetime);

  let total = 0;
  for (let i = 0; i < timesSmall.length; ++i) {
    total += timesSmall[i];
  }
  return formatTime(total / timesSmall.length);
};

const getAvg10 = (times) => {
  if (times.length === 0) {
    return formatTime(0);
  }

  let timesSmall = times.slice(0, 10).map((time) => time.solvetime);

  let total = 0;
  for (let i = 0; i < timesSmall.length; ++i) {
    total += timesSmall[i];
  }
  return formatTime(total / timesSmall.length);
};

const getAvg3o5 = (times) => {
  if (times.length < 3) {
    return formatTime(0);
  }

  let timesSmall = times.slice(0, 5).map((time) => time.solvetime);

  let total = 0;
  for (let i = 0; i < timesSmall.length; ++i) {
    total += timesSmall[i];
  }

  total -= Math.min(...timesSmall);
  total -= Math.max(...timesSmall);

  return formatTime(total / Math.min(3, timesSmall.length - 2));
};
const getAvg10o12 = (times) => {
  if (times.length < 3) {
    return formatTime(0);
  }

  let timesSmall = times.slice(0, 12).map((time) => time.solvetime);

  let total = 0;
  for (let i = 0; i < timesSmall.length; ++i) {
    total += timesSmall[i];
  }

  total -= Math.min(...timesSmall);
  total -= Math.max(...timesSmall);

  return formatTime(total / Math.min(10, timesSmall.length - 2));
};

const SummaryCard = () => {
  const { times } = useContext(TimesContext);

  return (
    <div
      className="container p-2 m-0 bg-light border border-2 border-dark"
      style={{ width: "80%" }}
    >
      <div className="row text-end">
        <div className="col">Avg: {getAvg(times)}</div>
        <div className="col">Best: {getBest(times)}</div>
      </div>
      <div className="row text-end">
        <div className="col">Avg of 5: {getAvg5(times)}</div>
        <div className="col">3 of 5: {getAvg3o5(times)}</div>
      </div>
      <div className="row text-end">
        <div className="col">Avg 10: {getAvg10(times)}</div>
        <div className="col">10 of 12: {getAvg10o12(times)}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
