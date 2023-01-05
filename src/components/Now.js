import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function DPNow({ dataNow }) {
  const [slideIndex, setSlideIndex] = useState(
    parseInt(sessionStorage.slideIndex)
  );
  const [prevButtomVisible, setPrevButtonVisible] = useState(true);
  const [nextButtomVisible, setNextButtonVisible] = useState(true);

  useEffect(() => {
    if (slideIndex == 0) {
      setPrevButtonVisible(false);
    } else if (slideIndex == dataNow.length - 1) {
      setNextButtonVisible(false);
    } else {
      setPrevButtonVisible(true);
      setNextButtonVisible(true);
    }
  }, [slideIndex]);

  useEffect(() => {
    setSlideIndex(parseInt(sessionStorage.slideIndex));
  }, []);

  return (
    <div className="relative w-[100%] h-[100vh]">
      {prevButtomVisible && (
        <FiChevronLeft
          size={40}
          color="gray"
          onClick={() => setSlideIndex(parseInt(slideIndex - 1))}
          className="absolute top-[50%] left-[10%] z-[1] hover:bg-zinc-200 hover:cursor-pointer rounded-lg"
        />
      )}
      <div className="overflow-hidden h-[100%] relative pt-12 bg-gray-100">
        <div className="flex absolute top-[5%] left-[3%] z-[1] pt-10">
          <div className="w-2 h-12 bg-black mr-5"></div>
          <div className="text-5xl">현재 전시</div>
        </div>
        {dataNow.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-row w-[700vw]">
            {dataNow.map((item, index) => (
              <div
                key={index}
                style={{
                  transform: `translateX(-${slideIndex * 100}vw)`,
                  transitionDuration: "1s",
                }}
                className="relative w-[100vw] h-[100vh]"
              >
                <img
                  src={item.DP_MAIN_IMG}
                  className="absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] drop-shadow-2xl object-cover w-[25%] h-[50%]"
                />
                <div className="absolute flex flex-col top-[28%] left-[49%] w-[35%]">
                  <div className="title text-5xl pb-7">{item.DP_NAME}</div>
                  <div className="pb-3">
                    <span className="font-bold">ARTIST</span> | {item.DP_ARTIST}
                  </div>
                  <div className="pb-3">
                    <span className="font-bold">장소</span> | {item.DP_PLACE}
                  </div>
                  <div className="pb-3">
                    <span className="font-bold">기간</span> | {item.DP_START} ~{" "}
                    {item.DP_END}
                  </div>
                </div>
                <div className="absolute top-[65%] left-[49%]">
                  <Link
                    to={`NowDetail/${index}`}
                    className="border border-black p-3 px-7 hover:bg-black hover:text-white"
                    onClick={() =>
                      sessionStorage.setItem("slideIndex", slideIndex)
                    }
                  >
                    자세히 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {nextButtomVisible && (
        <FiChevronRight
          size={40}
          color="gray"
          onClick={() => setSlideIndex(parseInt(slideIndex + 1))}
          className="absolute top-[50%] left-[90%] z-[1] hover:bg-zinc-200 hover:cursor-pointer rounded-lg"
        />
      )}
    </div>
  );
}
