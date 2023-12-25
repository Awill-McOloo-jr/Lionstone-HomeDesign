import React from "react";

function Headline({title}) {
  return (
    <div className="flex gap-5 items-center justify-center">
      <div className="bg-green-600 w-[100px] h-[2px]"> </div>
      <h1 className="text-2xl uppercase font-bold text-gray-400">{title}</h1>
      <div className="bg-green-600 w-[100px] h-[2px]"> </div>
    </div>
  );
}

export default Headline;
