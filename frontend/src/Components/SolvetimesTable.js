import React, { useContext } from "react";
import { TimesContext } from "../CubetimerPage";

const SolvetimesTable = () => {
  const times = useContext(TimesContext);

  return (
    <table className="table table-sm table-primary table-borderless border border-2 border-dark">
      <tbody>
        {times.map((time, id) => (
          <tr key={id}>
            <th scope="row" className="text-end">
              {id}:
            </th>
            <td className="text-center">{time.toFixed(3)}</td>
            <td>x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SolvetimesTable;
