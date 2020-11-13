import React from "react";

function MetricTableRow(props) {
  const { metricItem } = props;
  const Icon = metricItem.icon;
  return (
    <tr>
      <td className="border-b px-4 ">
        <span className="bg-gray-100 px-2 py-1 ">{metricItem.id}</span>
      </td>
      <td className="border-b">
        <Icon />
      </td>
      <td className="border-b px-4 py-2">{metricItem.title}</td>
      <td className="border-b px-4 py-2">{metricItem.quantity}</td>
    </tr>
  );
}

export default MetricTableRow;
