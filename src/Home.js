import React, { useRef, useLayoutEffect } from "react";
import { FiChevronsUp } from "react-icons/fi";
import NavBar from "./components/NavBar";
import Now from "./components/Now";
import Intro from "./components/Intro";
import Prev from "./components/Prev";
import Location from "./components/Location";
import Information from "./components/Information";

export default function Home({
  isLoading,
  dataNow,
  dataPrevBanner,
  dataPrevBanner2,
}) {
  const scrollRef = useRef([]);

  useLayoutEffect(() => {
    window.scroll(0, sessionStorage.y);
  }, []);

  const handleScrollView = (event) => {
    const name = event.target.innerText;
    const category = {
      MAIN: 0,
      "현재 전시": 1,
      "지난 전시": 2,
      방문하기: 3,
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
            <Prev
              dataPrevBanner={dataPrevBanner}
              dataPrevBanner2={dataPrevBanner2}
            />
          </div>
          <div ref={(el) => (scrollRef.current[3] = el)}>
            <Location />
          </div>
          <div>
            <Information />
          </div>
        </div>
      )}
    </div>
  );
}
