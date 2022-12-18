import React from "react";
import { Link } from "react-router-dom";

export default function Location() {
  const museumName = [
    "서울시립미술관 서소문본관",
    "서울시립 북서울미술관",
    "서울시립 남서울미술관",
    "서울시립 미술아카이브",
    "서울시립 난지미술창작스튜디오",
    "SeMA 벙커",
    "SeMA 창고",
    "SeMA 백남준기념관",
  ];

  return (
    <div className="w-[100%] h-[100vh] my-[70px] bg-gray-100 flex flex-row flex-wrap justify-center items-center">
      {museumName.map((item, index) => (
        <Link
          to={`Map/${index}`}
          key={index}
          className="bg-white drop-shadow-lg w-[18%] h-[27%] mx-[20px] flex justify-center items-center hover:scale-105 duration-100 hover:cursor-pointer"
        >
          <div>{item}</div>
        </Link>
      ))}
    </div>
  );
}
