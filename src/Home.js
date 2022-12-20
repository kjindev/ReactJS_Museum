import React, { useState, useEffect, useRef } from "react";
import { FiChevronsUp } from "react-icons/fi";
import NavBar from "./components/NavBar";
import Now from "./components/Now";
import Intro from "./components/Intro";
import Prev from "./components/Prev";
import Location from "./components/Location";
import Information from "./components/Information";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
export default function Home() {
  const [dataNow, setDataNow] = useState([]);
  const [dataPrev, setDataPrev] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollRef = useRef([]);
  const loader = useLoaderData();

  console.log(loader);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_API_KEY}/json/ListExhibitionOfSeoulMOAInfo/1/50/`
      );
      const result = await response.json();
      const data = await result.ListExhibitionOfSeoulMOAInfo.row;
      if (dataNow.length === 0) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].DP_END >= `${year}-${month}-${day}`) {
            dataNow.push(data[i]);
          } else if (
            data[i].DP_END < `${year}-${month}-${day}` &&
            data[i].DP_END >= "2022-01-01"
          ) {
            dataPrev.push(data[i]);
          }
        }
      }
      setIsLoading(false);
    }
    getData();
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
    <div>
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
