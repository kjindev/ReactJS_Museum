import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiChevronLeft, FiClock } from "react-icons/fi";

export default function PrevDetail({ dataPrev }) {
  const [searchText, setSearchText] = useState("");
  const [submitText, setSubmitText] = useState("");
  const [dataLoading, setdataLoading] = useState(true);
  const monthList = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const [start, setStart] = useState([2021, 1]);
  const [end, setEnd] = useState([2023, 12]);

  const { pathname } = useLocation();

  const dataRef = useRef([]);
  const dataArr = [];
  for (let i = 0; i < 8; i++) {
    dataArr[i] = dataPrev[i];
  }

  useEffect(() => {
    setdataLoading(false);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitText(searchText);
    for (let i = 0; i < dataPrev.length; i++) {
      const startDate = dataRef.current.children[i].children[3].innerText;
      const endDate = dataRef.current.children[i].children[4].innerText;
      dataRef.current.children[i].classList.remove("hidden");
      if (
        dataRef.current.children[i].innerText.includes(submitText) === false &&
        dataRef.current.children[i].children[2].innerText.includes(
          submitText
        ) === false
      ) {
        dataRef.current.children[i].classList.add("hidden");
      } else if (submitText === "") {
        dataRef.current.children[i].classList.remove("hidden");
      } else if (
        startDate < `${start[0]}-${start[1]}` ||
        endDate > `${end[0]}-${end[1]}`
      ) {
        dataRef.current.children[i].classList.add("hidden");
      } else {
        dataRef.current.children[i].classList.remove("hidden");
      }
    }
  };
  /*
  const handleClick = () => {
    for (let i = 0; i < dataPrev.length; i++) {
      const startDate = dataRef.current.children[i].children[3].innerText;
      const endDate = dataRef.current.children[i].children[4].innerText;
      dataRef.current.children[i].classList.remove("hidden");
      if (
        startDate < `${start[0]}-${start[1]}` ||
        endDate > `${end[0]}-${end[1]}`
      ) {
        dataRef.current.children[i].classList.add("hidden");
      } else {
        dataRef.current.children[i].classList.remove("hidden");
      }
    }
  };
*/
  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleStartClick = (event) => {
    if (event.target.name === "year") {
      setStart([event.target.value, start[1]]);
    } else if (event.target.name === "month") {
      setStart([start[0], event.target.value]);
    }
  };

  const handleEndClick = (event) => {
    if (event.target.name === "year") {
      setEnd([event.target.value, end[1]]);
    } else if (event.target.name === "month") {
      setEnd([end[0], event.target.value]);
    }
  };

  return (
    <div className="flex w-[100%] h-[100vh]">
      <div className="bg-black w-[16%] h-[100%] fixed p-3">
        <Link to="/">
          <div className="flex items-center mb-3">
            <FiChevronLeft
              color="white"
              size={20}
              className="hover:cursor-pointer"
            />
            <div className="text-white ml-2">홈으로 돌아가기</div>
          </div>
        </Link>
        <div className="flex items-center">
          <FiClock color="white" size={20} />
          <div className="text-white ml-2">전시 기간</div>
        </div>
        <div className="mb-3">
          <div className="text-white ml-7">| 전체</div>
          <div className="text-white brightness-50 ml-7">| 2022</div>
          <div className="text-white brightness-50 ml-7">| 2021</div>
        </div>
        <div className="flex items-center">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <BiSearch
              size={20}
              color="white"
              className="hover:cursor-pointer"
            />
            <input
              value={searchText}
              onChange={handleTextChange}
              placeholder="검색하기"
              className="w-[100%] h-7 pl-3 py-4 mx-2 bg-black border border-white text-white"
            />
          </form>
        </div>
      </div>
      <div className="w-[84%] ml-[16%] p-12">
        <div className="flex w-[100%]">
          <div className="w-2 h-[5.2rem] bg-black mr-5"></div>
          <div className="flex flex-col">
            <div className="text-5xl my-1">지난 전시</div>
            <div className="text-lg">
              서울시립미술관의 지난 전시를 확인해보세요
            </div>
          </div>
        </div>
        {/*<div className="bg-gray-200 my-7 p-5 px-7">
          <div className="font-semibold text-xl">검색 필터</div>
          <form onSubmit={handleSubmit} className="mt-5">
            <span className="font-bold">이름 |</span>
            <input
              placeholder="작품 및 아티스트 이름으로 검색해보세요"
              type="text"
              value={searchText}
              onChange={handleTextChange}
              className="w-[45%] p-2 px-3 mx-5"
            />
          </form>
          <div className="flex justify-between">
            <div className="mt-5">
              <span className="font-bold">기간 |</span>
              <span className="pl-5" onClick={handleStartClick}>
                <span>전시 시작일</span>
                <select
                  className="p-2 px-3 text-center ml-3"
                  name="year"
                  defaultValue={2021}
                >
                  <option>2022</option>
                  <option>2021</option>
                </select>
                <span className="ml-2">년</span>
                <select
                  className="p-2 px-3 text-center ml-3"
                  name="month"
                  defaultValue={1}
                >
                  {monthList.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
                <span className="ml-2">월</span>
              </span>
              <span className="pl-5" onClick={handleEndClick}>
                <span>전시 종료일</span>
                <select
                  className="p-2 px-3 text-center ml-3"
                  name="year"
                  defaultValue={2023}
                >
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                </select>
                <span className="ml-2">년</span>
                <select
                  className="p-2 px-3 text-center ml-3"
                  name="month"
                  defaultValue={12}
                >
                  {monthList.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
                <span className="ml-2">월</span>
              </span>
            </div>
            <button type="submit" className="bg-black mt-5 px-7 text-white">
              검색
            </button>
          </div>
        </div>*/}
        <div
          className="w-[100%] h-[50%] flex flex-wrap justify-start "
          ref={dataRef}
        >
          {dataLoading ? (
            <div>Loading...</div>
          ) : (
            dataPrev.map((item, index) => (
              <div
                key={index}
                className="m-3 w-[20%] h-[100%] flex flex-col hover:cursor-pointer drop-shadow-xl"
              >
                <img
                  src={item.DP_MAIN_IMG}
                  className="w-[90%] h-[70%] p-2 object-cover bg-white"
                />
                <div className="p-2">{item.DP_NAME}</div>
                <div className="hidden">{item.DP_ARTIST}</div>
                <div className="hidden">{item.DP_START}</div>
                <div className="hidden">{item.DP_END}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
