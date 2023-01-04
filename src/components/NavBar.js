import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar({ handleScrollView, navName, isWindow }) {
  const textStyle = "pl-5 cursor-pointer hover:text-indigo-300 text-base";
  const textStyleHover = "pl-5 cursor-pointer text-indigo-500 text-base";
  const { pathname } = useLocation();

  useEffect(() => {
    if (isWindow) {
      console.log(typeof window.innerWidth);
    }
  }, [window.innerWidth]);

  return (
    <div className="fixed z-[2] w-[100%] h-12 flex flex-row justify-between py-3 px-7 bg-white">
      <div className="lg:text-base sm:text-xs">서울시립미술관 전시안내</div>
      {pathname === "/" ? (
        window.innerWidth > 1080 ? (
          <div className="flex flex-row" onClick={handleScrollView}>
            <div className={navName === "intro" ? textStyleHover : textStyle}>
              MAIN
            </div>
            <div className={navName === "now" ? textStyleHover : textStyle}>
              현재 전시
            </div>
            <div className={navName === "prev" ? textStyleHover : textStyle}>
              지난 전시
            </div>
            <div
              className={navName === "location" ? textStyleHover : textStyle}
            >
              방문하기
            </div>
          </div>
        ) : (
          <div>
            <AiOutlineMenu />{" "}
          </div>
        )
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
