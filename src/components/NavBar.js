import React from "react";

function NavBar({ handleScrollView }) {
  const textStyle = "ml-5 cursor-pointer hover:text-zinc-400";
  return (
    <div className="text-sm fixed z-[2] w-[100%] h-12 flex flex-row justify-between py-4 px-7 bg-white">
      <div>Main</div>
      <div className="flex flex-row" onClick={handleScrollView}>
        <div className={textStyle}>Home</div>
        <div className={textStyle}>전시 둘러보기</div>
        <div className={textStyle}>지난 전시</div>
        <div className={textStyle}>방문하기</div>
        <div className={textStyle}>Information</div>
      </div>
    </div>
  );
}

export default NavBar;
