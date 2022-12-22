import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DPPrev({ dataPrev }) {
  const dataPrevPreview = [];

  for (let i = 0; i < 8; i++) {
    dataPrevPreview.push(dataPrev[i]);
  }

  return (
    <div className="h-[100vh] flex items-center flex-wrap bg-black pt-5">
      {dataPrevPreview.map((item, index) => (
        <div
          key={index}
          className="flex justify-center w-[25%] h-[50%] pt-10 px-1"
        >
          <img
            src={item.DP_MAIN_IMG}
            className="object-none w-[100%] h-[100%]"
          />
        </div>
      ))}
    </div>
  );
}
