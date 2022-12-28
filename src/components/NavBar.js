import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

function NavBar({ handleScrollView }) {
  const textStyle = "ml-5 cursor-pointer hover:text-zinc-400 text-base";
  const { pathname } = useLocation();

  return (
    <div className="fixed z-[2] w-[100%] h-12 flex flex-row justify-between py-3 px-7 bg-white">
      <div className="text-base">서울시립미술관 전시안내</div>
      {pathname === "/" ? (
        <div className="flex flex-row" onClick={handleScrollView}>
          <div className={textStyle}>MAIN</div>
          <div className={textStyle}>현재 전시</div>
          <div className={textStyle}>지난 전시</div>
          <div className={textStyle}>방문하기</div>
        </div>
      ) : (
        <Link to="/">
          <div className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 p-1 px-2 pl-3 rounded-3xl">
            <div className="text-sm cursor-pointer">메인페이지로</div>
            <FiChevronRight size={18} />
          </div>
        </Link>
      )}
    </div>
  );
}

export default NavBar;
