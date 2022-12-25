import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PrevDetail({ dataPrev }) {
  const [searchText, setSearchText] = useState("");
  const [submitText, setSubmitText] = useState("");
  const [dataLoading, setdataLoading] = useState(true);
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let start = [2021, 1];
  let end = [2023, 12];

  const { pathname } = useLocation();

  const nameRef = useRef([]);
  const dataArr = [];
  for (let i = 0; i < 8; i++) {
    dataArr[i] = dataPrev[i];
  }
  /*
  const io = new IntersectionObserver(콜백함수, { threshold: 0.7 });
  const targetRef = useRef();
*/
  useEffect(() => {
    setdataLoading(false);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleTextSubmit = (event) => {
    event.preventDefault();
    setSubmitText(searchText);
    setSearchText("");
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleStartClick = (event) => {
    if (event.target.name === "year") {
      start[0] = parseInt(event.target.value);
    } else if (event.target.name === "month") {
      start[1] = parseInt(event.target.value);
    }
  };

  const handleEndClick = (event) => {
    if (event.target.name === "year") {
      end[0] = parseInt(event.target.value);
    } else if (event.target.name === "month") {
      end[1] = parseInt(event.target.value);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] p-12">
      <div className="flex">
        <div className="w-2 h-12 bg-black mr-5"></div>
        <div className="text-5xl">지난 전시</div>
      </div>
      <form onSubmit={handleTextSubmit} className="p-3">
        <span>이름으로 검색하기</span>
        <input
          placeholder="작품 및 아티스트 이름으로 검색해보세요"
          type="text"
          value={searchText}
          onChange={handleTextChange}
          className="w-[30%] drop-shadow-md p-2 px-3 mx-5"
        />
        <button
          type="submit"
          className="w-[5%] bg-black drop-shadow-md text-white p-2"
        >
          검색
        </button>
      </form>
      <div className="p-3">
        <span>기간으로 검색하기</span>
        <span className="pl-5" onClick={handleStartClick}>
          <span>전시 시작일</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="year"
            defaultValue={2021}
          >
            <option>2022</option>
            <option>2021</option>
          </select>
          <span>년</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="month"
            defaultValue={1}
          >
            {monthList.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <span>월</span>
        </span>
        <span className="pl-5" onClick={handleEndClick}>
          <span>전시 종료일</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="year"
            defaultValue={2023}
          >
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
          <span>년</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="month"
            defaultValue={12}
          >
            {monthList.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <span>월</span>
        </span>
        <button
          type="submit"
          className="w-[5%] bg-black drop-shadow-md text-white p-2"
        >
          검색
        </button>
      </div>
      <div
        className="w-[100%] h-[100%] flex flex-wrap justify-center content-start"
        ref={nameRef}
      >
        {dataLoading ? (
          <div>Loading...</div>
        ) : (
          dataPrev.map((item, index) => (
            <div
              key={index}
              className="m-3 w-[20%] h-[50%] flex flex-col hover:cursor-pointer drop-shadow-xl"
            >
              <img
                src={item.DP_MAIN_IMG}
                className="w-[100%] h-[100%] p-2 object-cover bg-white"
              />
              <div className="p-2">{item.DP_NAME}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
