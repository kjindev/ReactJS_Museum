import React from "react";

function NavBar({ handleScrollView }) {
  const textStyle = "ml-5 cursor-pointer hover:text-zinc-400 text-base";
  return (
    <div className="text-sm fixed z-[2] w-[100%] h-12 flex flex-row justify-between py-3 px-7 bg-white">
      <div className="text-base">서울시립미술관 전시안내</div>
      <div className="flex flex-row" onClick={handleScrollView}>
        <div className={textStyle}>MAIN</div>
        <div className={textStyle}>현재 전시</div>
        <div className={textStyle}>지난 전시</div>
        <div className={textStyle}>방문하기</div>
      </div>
    </div>
  );
}

export default NavBar;
