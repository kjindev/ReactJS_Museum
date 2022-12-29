import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiCaretLeft } from "react-icons/bi";

function DPNowDetail({ dataNow }) {
  const { index } = useParams();
  const [infoText, setInfoText] = useState();

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-black w-[16%] h-[100%] fixed pb-3">
        <Link to="/">
          <div className="flex items-center my-3">
            <BiCaretLeft
              color="white"
              size={27}
              className="hover:cursor-pointer ml-2 mr-1"
            />
            <div className="text-white">홈으로 돌아가기</div>
          </div>
        </Link>
      </div>
      {dataNow[index] === undefined ? (
        <div>Loading...</div>
      ) : (
        <div className="w-[84%] h-[100vh] p-7 ml-[16%]">
          <div className="flex">
            <div className="w-2 h-[5.5rem] bg-black mr-5"></div>
            <div className="flex flex-col">
              <div className="text-5xl my-1">{dataNow[index].DP_NAME}</div>
              <div className="text-lg">{dataNow[index].DP_ARTIST}</div>
            </div>
          </div>
          <div className="flex w-[100%] h-[100%]">
            <div className="w-[40%] h-[80%]">
              <img
                src={dataNow[index].DP_MAIN_IMG}
                className="w-[100%] h-[100%] object-cover p-7"
              />
            </div>
            <div className="flex flex-col w-[60%] p-7">
              <div className="my-3">
                <div className="mb-1">
                  <span className="font-bold">전시 장소</span> |{" "}
                  {dataNow[index].DP_PLACE}
                </div>
                <div className="mb-1">
                  <span className="font-bold">전시 기간</span> |{" "}
                  {dataNow[index].DP_START} ~ {dataNow[index].DP_END}
                </div>
                <div className="mb-1">
                  <span className="font-bold">작품 장르</span> |{" "}
                  {dataNow[index].DP_ART_PART}
                </div>
                <div className="mb-1">
                  <span className="font-bold">작품 개수</span> |{" "}
                  {dataNow[index].DP_ART_CNT}
                </div>
              </div>
              <div className="text-justify">
                {dataNow[index].DP_INFO}{" "}
                <span className="italic text-gray-500 hover:text-indigo-500">
                  <a href={dataNow[index].DP_LNK} target="_blank">
                    전시 상세 홈페이지
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DPNowDetail;
