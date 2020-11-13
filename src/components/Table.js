import React from "react";
import MetricTableRow from "./MetricTableRow";

function Table(props) {
  return (
    <table className="table-fixed text-xs">
      <thead>
        <tr>
          <th className="w-1/12 px-4 py-2 "></th>
          <th className="w-1/12 px-4 py-2"></th>
          <th className="w-7/12 px-4 py-2"></th>
          <th className="w-3/12 px-4 py-2 text-teal-400">Actual</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((metricItem) => (
          <MetricTableRow key={metricItem.id} metricItem={metricItem} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
