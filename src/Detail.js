import React from "react";

function Detail() {
  return (
    <div ref={(el) => (scrollRef.current[1] = el)}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="relative">
          <div>
            {prevButtomVisible && (
              <FiChevronLeft
                size={40}
                color="gray"
                onClick={() => setSlideIndex(slideIndex - 1)}
                className="absolute top-[50%] left-[10%] z-[1] hover:bg-zinc-200 hover:cursor-pointer rounded-lg"
              />
            )}
            <div className="overflow-hidden">
              <div className="flex flex-row w-[600vw]">
                {dataNow.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      transform: `translateX(-${slideIndex * 100}vw)`,
                      transitionDuration: "1s",
                    }}
                    className="relative w-screen h-[100vh] bg-zinc-100"
                  >
                    <img
                      src={item.DP_MAIN_IMG}
                      className="absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] drop-shadow-2xl object-cover w-[25%] h-[50%]"
                    />
                    <div className=" absolute top-[25%] left-[50%] w-[35%]">
                      <div className="title text-[40px]">{item.DP_NAME}</div>
                      <div>by {item.DP_ARTIST}</div>
                      <div>
                        {item.DP_START} - {item.DP_END}
                      </div>
                      <div className="flex flex-row items-center justify-center bg-zinc-300 w-[20%] text-center rounded-xl hover:cursor-pointer hover:bg-zinc-200">
                        <FiArrowRight />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {nextButtomVisible && (
              <FiChevronRight
                size={40}
                color="gray"
                onClick={() => setSlideIndex(slideIndex + 1)}
                className="absolute top-[50%] left-[90%] z-[1] hover:bg-zinc-200 hover:cursor-pointer rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;