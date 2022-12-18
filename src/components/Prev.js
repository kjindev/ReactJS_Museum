import React from "react";
import { Link } from "react-router-dom";

export default function DPPrev({ dataPrev }) {
  const dataPrevPreview = [];

  for (let i = 0; i < 4; i++) {
    dataPrevPreview.push(dataPrev[i]);
  }

  const handlePrevClick = () => {
    console.log("click");
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-row justify-center items-center">
      {dataPrevPreview.map((item, index) => (
        <Link to="PrevDetail" key={index}>
          <div className="tooltip hover:scale-105 hover:cursor-pointer duration-75">
            <div className="tooltiptext">{item.DP_NAME}</div>
            <img
              src={item.DP_MAIN_IMG}
              className="object-cover w-[300px] h-[400px] mx-[20px]"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
