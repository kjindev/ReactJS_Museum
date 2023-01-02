import React, { useRef, useEffect, useLayoutEffect } from "react";
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

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
      }
    });
  };

  const options = { threshold: 0.5 };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    console.log(scrollRef.current);
    scrollRef.current.forEach((el) => observer.observe(el));
  }, [window.scrollY]);

  useLayoutEffect(() => {
    window.scroll(0, sessionStorage.y);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <div ref={(el) => (scrollRef.current[0] = el)} data-name="intro">
            <Intro />
          </div>
          <div ref={(el) => (scrollRef.current[1] = el)} data-name="now">
            <Now dataNow={dataNow} />
          </div>
          <div ref={(el) => (scrollRef.current[2] = el)} data-name="prev">
            <Prev
              dataPrevBanner={dataPrevBanner}
              dataPrevBanner2={dataPrevBanner2}
            />
          </div>
          <div ref={(el) => (scrollRef.current[3] = el)} data-name="location">
            <Location />
          </div>
          <div>
            <Information />
          </div>
        </div>
      )}
      <FiChevronsUp
        onClick={handleScrollTop}
        size={30}
        color="gray"
        className="fixed top-[92%] left-[95%] drop-shadow-lg bg-white hover:bg-gray-300 hover:cursor-pointer rounded-full z-[2] w-[40px] h-[30px]"
      />
    </div>
  );
}
