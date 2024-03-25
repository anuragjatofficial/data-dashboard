import React from "react";
import {
  Chart as ChartJS,
  ChartData,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function FundContribution() {
  const data: ChartData<"line", number[]> = {
    labels: ["Equity", "Gold", "Bonds", "Govt. Securities"],
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
      },
    ],
  };

  return (
    <div className="w-[300px] bg-white h-[450px] flex flex-col rounded-md">
      <div className=" h-fit text-left px-4 py-4">
        <h2 className="text-base pb-2">Sub-Category</h2>
        <p className="text-xs font-normal text-gray-500">
          A mutual fund distribution represents the earnings of a fund being
          passed on to the individual investor or unit holder of the fund.{" "}
        </p>
      </div>
      <div className="  content-between h-[86%] mb-4 mx-4  items-center flex">
        <Line data={data} />
      </div>
    </div>
  );
}
