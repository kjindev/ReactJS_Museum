import React from "react";

function NavBar() {
  const textStyle = "ml-[18px] cursor-pointer hover:text-zinc-400";
  return (
    <div className="flex flex-row justify-between mb-[20px]">
      <div>서울시립미술관 전시 정보</div>
      <div className="flex flex-row">
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
