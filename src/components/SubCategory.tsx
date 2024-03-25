import { ChartData } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

export default function SubCategory() {
  const data: ChartData<"pie", number[]> = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "My First Dataset",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="w-[300px] bg-white h-[450px] flex flex-col rounded-md">
      <div className=" h-fit text-left px-4 py-4">
        <h2 className="text-base pb-2">Sub-Category</h2>
        <p className="text-xs font-normal">
          The assets are distributed between equity and cash & equivalents.{" "}
        </p>
      </div>
      <div className="  content-between h-[86%] mb-4 mx-4">
        <Pie data={data} />
      </div>
    </div>
  );
}
