import React from "react";
import Table from "./Table";

function MetricTable(props) {
  return (
    <div className="bg-white shadow-md rounded-sm p-3 my-2">
      <h4 className="text-xs font-semibold mt-1">{props.date}</h4>
      <h3 className=" font-bold my-2">{props.title}</h3>
      <Table list={props.list} />
    </div>
  );
}

export default MetricTable;
