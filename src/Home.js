import React, { useRef, useLayoutEffect } from "react";
import { FiChevronsUp } from "react-icons/fi";
import NavBar from "./components/NavBar";
import Now from "./components/Now";
import Intro from "./components/Intro";
import Prev from "./components/Prev";
import Location from "./components/Location";
import Information from "./components/Information";

export default function Home({ isLoading, dataNow, dataPrev }) {
  const scrollRef = useRef([]);

  useLayoutEffect(() => {
    window.scroll(0, sessionStorage.y);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollView = (event) => {
    const name = event.target.innerText;
    const category = {
      Home: 0,
      "전시 둘러보기": 1,
      "지난 전시": 2,
      방문하기: 3,
      Information: 4,
    };
    scrollRef.current[category[name]].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div onClick={() => sessionStorage.setItem("y", window.pageYOffset)}>
      <NavBar handleScrollView={handleScrollView} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div ref={(el) => (scrollRef.current[0] = el)}>
            <Intro />
          </div>
          <div ref={(el) => (scrollRef.current[1] = el)}>
            <Now dataNow={dataNow} />
          </div>
          <div ref={(el) => (scrollRef.current[2] = el)}>
            <Prev dataPrev={dataPrev} />
          </div>
          <div ref={(el) => (scrollRef.current[3] = el)}>
            <Location />
          </div>
          <div ref={(el) => (scrollRef.current[4] = el)}>
            <Information />
          </div>
          <FiChevronsUp
            onClick={handleScrollTop}
            size={30}
            color="white"
            className="fixed top-[92%] left-[95%] bg-gray-500 hover:bg-gray-300 hover:cursor-pointer rounded-full z-[2] w-[40px] h-[30px]"
          />
        </div>
      )}
    </div>
  );
}
