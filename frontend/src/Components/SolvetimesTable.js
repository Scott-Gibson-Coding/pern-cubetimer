import React, { useContext } from "react";
import { TimesContext } from "../CubetimerPage";
import { formatTime } from "../Utils/CubeUtils";

const SolvetimesTable = ({ updateTimes }) => {
  const times = useContext(TimesContext);

  const deleteTime = (time_id) => {
    const url = `http://localhost:5050/solvetimes/${time_id}`;
    fetch(url, { method: "DELETE" })
      .then((response) => {
        console.log(response);
        updateTimes((times) =>
          times.filter(({ time_id }) => time_id === time_id)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <table className="table table-sm table-primary table-borderless border border-2 border-dark">
      <tbody>
        {times.map(({ time_id, solvetime }, row_num) => (
          <tr key={row_num}>
            <th scope="row" className="text-end">
              {times.length - row_num}:
            </th>
            <td className="text-center">{formatTime(solvetime)}</td>
            <td>
              <a href="" onClick={() => deleteTime(time_id)}>
                x
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SolvetimesTable;
