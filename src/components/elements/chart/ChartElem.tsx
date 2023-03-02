import React from 'react'
import { Chart } from "react-google-charts";
import { GoogleChartWrapperChartType } from 'react-google-charts';

interface chartPropsType {
  type: GoogleChartWrapperChartType | undefined;
  title?: string;
  subTitle?: string;
  data: (string | number)[][];
  classList?: string;
}
export default function ChartElem(props: chartPropsType) {
  const data = props.data;
  const options = {
    title: props.title || "Chart",
    vAxis: { minValue: 0 },
    chartArea: { width: "80%", height: "80%" },
  };
  return (
    <div className={`chart_wrap ${props.classList || ""}`}>
      <Chart
        chartType={props.type}
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  )
}
