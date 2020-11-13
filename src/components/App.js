import React, { useState } from "react";
import { FcSalesPerformance } from "react-icons/fc";

import Header from "./Header";
import Metrics from "./Metrics";
import MetricTable from "./MetricTable";

import shopVisitors from "../images/shop-visitors.png";
import customerRetention from "../images/customer-retention.png";
import returnsAllowances from "../images/returns-allowances.png";
import grossSales from "../images/gross-sales.png";
import { useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(getPerformanceList());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-5 text-gray-700 ">
      <Header />
      <h2 className="mt-2 text-xl font-semibold">Retail Template</h2>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        <div className="col-span-1">
          <Metrics
            date="8 Nov 2017 - 14 Nov 2017"
            title="Shop Visitors"
            src={shopVisitors}
          />
          <Metrics
            date="1 Jun 2017 - 30 Nov 2017"
            title="Customer Retention"
            src={customerRetention}
          />
          <Metrics
            date="1 Jul 2017 - 30 Nov 2017"
            title="Returns by Value"
            src={returnsAllowances}
          />
        </div>
        <div className="col-span-1">
          <Metrics
            date="8 Nov 2017 - 14 Nov 2017"
            title="Shop Visitors"
            src={shopVisitors}
          />
          <Metrics
            date="1 Jun 2017 - 30 Nov 2017"
            title="Customer Retention"
            src={customerRetention}
          />
          <Metrics
            date="1 Jul 2017 - 30 Nov 2017"
            title="Returns by Value"
            src={returnsAllowances}
          />
        </div>
        <div className="col-span-1  ">
          <MetricTable
            date="1 Nov 2017 - 30 Nov 2017"
            title="Retail KPI Performance"
            list={list}
          />
          <Metrics
            date="9 Oct 2017 - 19 Nov 2017"
            title="Gross Sales"
            src={grossSales}
          />
        </div>
      </main>
    </div>
  );
}

function getPerformanceList() {
  return [
    {
      id: 1,
      icon: FcSalesPerformance,
      title: "Average Shopping Time",
      quantity: "100.00 mins",
    },
    {
      id: 2,
      icon: FcSalesPerformance,
      title: "Cost of Goods",
      quantity: "€7,000",
    },
    {
      id: 3,
      icon: FcSalesPerformance,
      title: "Customer Retention",
      quantity: "10%",
    },
    {
      id: 4,
      icon: FcSalesPerformance,
      title: "Fixed Cost Per Period",
      quantity: "€2,000.00",
    },
    {
      id: 5,
      icon: FcSalesPerformance,
      title: "Gross Sales",
      quantity: "€50,000.00",
    },
    {
      id: 6,
      icon: FcSalesPerformance,
      title: "Offline Sales",
      quantity: "€7,500.00",
    },
    {
      id: 7,
      icon: FcSalesPerformance,
      title: "Online Purchases",
      quantity: "€60.00",
    },
    {
      id: 8,
      icon: FcSalesPerformance,
      title: "Retail Price",
      quantity: "€8,000.00",
    },
    {
      id: 9,
      icon: FcSalesPerformance,
      title: "Returns & Allowances",
      quantity: "€100.00",
    },
    {
      id: 10,
      icon: FcSalesPerformance,
      title: "Shop Visitors",
      quantity: "125",
    },
  ];
}

export default App;
