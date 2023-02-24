import React from 'react'
import { Chart } from "react-google-charts";
import Header from '../header/Header';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

export default function MainContent() {
  return (
    <section className="main_content">
      <Header title="Overview"/>
      <div className="main_content_wrap">
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </section>
  )
}
