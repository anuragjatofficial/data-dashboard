import React from "react";

export default function BaseComponent() {
  return (
    <div className="w-[300px] bg-white h-[450px] flex flex-col rounded-md">
      <div className=" h-fit text-left px-4 py-4">
        <h2 className="text-base pb-2">Title</h2>
        <p className="text-xs font-normal text-gray-500">Description</p>
      </div>
      <div className="bg-gray-300 content-between h-[86%] mb-4 mx-4"></div>
    </div>
  );
}
