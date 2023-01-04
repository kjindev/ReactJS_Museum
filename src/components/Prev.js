import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function DPPrev({ dataPrevBanner, dataPrevBanner2 }) {
  return (
    <div className="overflow-hidden relative pt-12 w-[100%] h-[100vh]">
      <Link to="/PrevDetail">
        <div className="z-[1] w-[100%] absolute flex justify-center items-center p-5 top-[53%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:cursor-pointer hover:text-gray-400">
          <div className="lg:text-4xl text-3xl">지난 전시 둘러보기</div>
          <FiArrowRight size={30} className="ml-3" />
        </div>
      </Link>
      <div className="w-[400%] h-[50%] flex items-center image-box">
        <div className="flex w-[100%] h-[100%]">
          {dataPrevBanner.map((item, index) => (
            <div key={index} className="w-[25%] h-[70%]">
              <img
                src={item.DP_MAIN_IMG}
                width="500"
                height="500"
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[400%] h-[50%] flex image-box2">
        <div className="flex w-[100%] h-[100%]">
          {dataPrevBanner2.map((item, index) => (
            <div key={index} className="w-[25%] h-[70%] self-end">
              <img
                src={item.DP_MAIN_IMG}
                width="500"
                height="500"
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
