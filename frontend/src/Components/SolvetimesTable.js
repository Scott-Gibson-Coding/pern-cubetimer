import React, { useContext } from "react";
import { TimesContext } from "../CubetimerPage";
import { formatTime } from "../Utils/CubeUtils";

const SolvetimesTable = () => {
  const times = useContext(TimesContext);

  return (
    <table className="table table-sm table-primary table-borderless border border-2 border-dark">
      <tbody>
        {times.map(({ time_id, solvetime }, row_num) => (
          <tr key={row_num}>
            <th scope="row" className="text-end">
              {times.length - row_num}:
            </th>
            <td className="text-center">{formatTime(solvetime)}</td>
            <td>x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SolvetimesTable;
