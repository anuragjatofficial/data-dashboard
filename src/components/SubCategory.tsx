import { ChartData } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SubCategory() {
  const data: ChartData<"pie", number[]> = {
    labels: [
      "Flexi Cap Fund",
      "ELSS",
      "Small Cap Fund ",
      "Green",
      "Purple",
      "Orange",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [12, 19, 3, 5, 2, 3],

        backgroundColor: [
          "#75D6FF",
          "#75FFFF",
          "#AA75FF",
          "#FF7BF2",
          "#FF8E5D",
          "#FFC46A",
        ],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-[300px] bg-white h-[450px] flex flex-col rounded-md">
      <div className=" h-fit text-left px-4 py-4">
        <h2 className="text-base pb-2">Sub-Category</h2>
        <p className="text-xs font-normal text-gray-500">
          The assets are distributed between equity and cash & equivalents.
        </p>
      </div>
      <div className="  content-between h-[86%] mb-4 mx-4  items-center flex">
        <Pie data={data}  />
      </div>
    </div>
  );
}
