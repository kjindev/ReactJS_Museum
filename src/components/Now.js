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
          color="black"
          onClick={() => setSlideIndex(parseInt(slideIndex - 1))}
          className="absolute lg:top-[50%] top-[85%] left-[10%]  translate-x-[-50%] translate-y-[-50%] z-[1] hover:bg-zinc-200 hover:cursor-pointer rounded-lg"
        />
      )}
      <div className="overflow-hidden h-[100%] relative pt-[12%] bg-gray-100">
        <div className="pt-10 flex items-center lg:absolute lg:top-[5%] lg:left-[3%] z-[1]">
          <div className="lg:w-2 lg:h-12 w-1 h-9 bg-black mr-5"></div>
          <div className="lg:text-5xl text-3xl">현재 전시</div>
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
                  transitionDuration: "0.7s",
                }}
                className="lg:relative w-[100vw] h-[100vh] m-5"
              >
                <img
                  src={item.DP_MAIN_IMG}
                  className="lg:absolute lg:top-[50%] lg:left-[30%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:w-[25%] lg:h-[50%] w-[100%] h-[30%] drop-shadow-2xl object-cover"
                />
                <div className="lg:absolute lg:top-[28%] lg:left-[49%] lg:w-[35%] w-[100%] m-3">
                  <div className="title lg:text-5xl text-xl pb-7">
                    {item.DP_NAME}
                  </div>
                  <div className="lg:text-base text-xs">
                    <div className="pb-3">
                      <span className="font-bold">ARTIST</span> |{" "}
                      {item.DP_ARTIST}
                    </div>
                    <div className="pb-3">
                      <span className="font-bold">장소</span> | {item.DP_PLACE}
                    </div>
                    <div className="pb-3">
                      <span className="font-bold">기간</span> | {item.DP_START}{" "}
                      ~ {item.DP_END}
                    </div>
                  </div>
                </div>
                <div className="absolute lg:top-[68%] lg:left-[49%] translate-x-[-50%] translate-y-[-50%] top-[60%] left-[50%] pl-2">
                  <Link
                    to={`NowDetail/${index}`}
                    className="border border-black p-3 px-7 hover:bg-black hover:text-white text-xs"
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
          color="black"
          onClick={() => setSlideIndex(parseInt(slideIndex + 1))}
          className="absolute translate-x-[-50%] translate-y-[-50%]  lg:top-[50%] top-[85%] left-[90%] z-[1] hover:bg-zinc-200 hover:cursor-pointer rounded-lg"
        />
      )}
    </div>
  );
}
