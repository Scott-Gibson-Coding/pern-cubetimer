import React, { useContext } from "react";
import { TimesContext } from "../CubetimerPage";
import { formatTime } from "../Utils/CubeUtils";

const SolvetimesTable = () => {
  const { times, setTimes } = useContext(TimesContext);

  const deleteTime = (delete_id) => {
    const url = `http://localhost:5050/solvetimes/${delete_id}`;
    fetch(url, { method: "DELETE" })
      .then((response) => {
        console.log(response);
        setTimes((times) =>
          times.filter(({ time_id }) => time_id === delete_id)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="table-responsive overflow-auto border border-2 border-dark"
      style={{ height: "30vh" }}
    >
      <table className="table table-sm table-primary table-borderless m-0">
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
    </div>
  );
};

export default SolvetimesTable;
