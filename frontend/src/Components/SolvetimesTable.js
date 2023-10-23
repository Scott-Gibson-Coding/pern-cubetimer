import React, { useContext } from "react";
import { TimesContext } from "../CubetimerPage";

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
            <td className="text-center">{solvetime.toFixed(3)}</td>
            <td>x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SolvetimesTable;
