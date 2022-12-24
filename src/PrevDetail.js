import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PrevDetail({ dataPrev, isLoading }) {
  const [searchText, setSearchText] = useState("");
  const [submitText, setSubmitText] = useState("");
  const [dataLoading, setDataLoading] = useState(true);
  const nameRef = useRef([]);

  if (nameRef.current.length !== 0) {
    console.log(nameRef.current);
  }

  /*useEffect(() => {
    if (dataPrev[dataPrev.length - 1] !== undefined) {
      console.log(dataPrev[0]);
      console.log(nameRef.current[0]);
    }
  }, [dataPrev]);*/

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleTextSubmit = (event) => {
    event.preventDefault();
    setSubmitText(searchText);
    setSearchText("");
    console.log(submitText);
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="w-[100%] h-[100vh]">
      <div className="flex pt-10">
        <div className="w-2 h-12 bg-black mr-5"></div>
        <div className="text-5xl">지난 전시</div>
      </div>
      <form onSubmit={handleTextSubmit}>
        <input
          placeholder="작품 및 아티스트 이름으로 검색해보세요"
          type="text"
          value={searchText}
          onChange={handleTextChange}
          className="w-[30%] rouded-xl drop-shadow-lg"
        />
        <button type="submit">검색</button>
      </form>
      <div className="flex flex-wrap w-[100%] h-[100%]" ref={nameRef}>
        {dataPrev.map((item, index) => (
          <div key={index} className="w-[25%] h-[30%] p-3">
            <img
              src={item.DP_MAIN_IMG}
              className="w-[100%] h-[100%] object-cover"
            />
            <div>{item.DP_ARTIST}</div>
            <div /* ref={(el) => (nameRef.current[index] = el)}*/>
              {item.DP_NAME}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
