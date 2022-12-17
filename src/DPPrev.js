import React from "react";

export default function DPPrev({ dataPrev }) {
  return (
    <div>
      <div className="h-[100vh] flex flex-row justify-center items-center drop-shadow-xl">
        <div className="tooltip hover:scale-105 hover:cursor-pointer duration-75">
          <div className="tooltiptext">{dataPrev[0].DP_NAME}</div>
          <img
            src={dataPrev[0].DP_MAIN_IMG}
            className="object-cover w-[300px] h-[400px] mx-[20px]"
          />
        </div>
        <div className="tooltip hover:scale-105 hover:cursor-pointer duration-75">
          <div className="tooltiptext">{dataPrev[1].DP_NAME}</div>
          <img
            src={dataPrev[1].DP_MAIN_IMG}
            className="object-cover w-[300px] h-[400px] mx-[20px]"
          />
        </div>
        <div className="tooltip hover:scale-105 hover:cursor-pointer duration-75">
          <div className="tooltiptext">{dataPrev[2].DP_NAME}</div>
          <img
            src={dataPrev[2].DP_MAIN_IMG}
            className="object-cover w-[300px] h-[400px] mx-[20px]"
          />
        </div>
        <div className="tooltip hover:scale-105 hover:cursor-pointer duration-75">
          <div className="tooltiptext">{dataPrev[3].DP_NAME}</div>
          <img
            src={dataPrev[3].DP_MAIN_IMG}
            className="object-cover w-[300px] h-[400px] mx-[20px]"
          />
        </div>
      </div>
    </div>
  );
}
