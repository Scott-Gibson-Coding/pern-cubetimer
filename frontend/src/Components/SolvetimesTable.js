import React from "react";

const SolvetimesTable = () => {
  const times = [5.55, 6.74, 8.52];

  return (
    <table className="table table-sm table-primary table-borderless border border-2 border-dark">
      <tbody>
        {times.map((time, id) => (
          <tr key={id}>
            <th scope="row" className="text-end">
              {id}:
            </th>
            <td className="text-center">{time}</td>
            <td>x</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SolvetimesTable;
