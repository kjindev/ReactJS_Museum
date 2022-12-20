import React from "react";

function NavBar({ handleScrollView }) {
  const textStyle = "ml-[25px] cursor-pointer hover:text-zinc-400";
  return (
    <div className="fixed z-[2] w-[100%] h-[60px] flex flex-row justify-between py-[20px] px-[30px] bg-white ">
      <div>Our Museum</div>
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
