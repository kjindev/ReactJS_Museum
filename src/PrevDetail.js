import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiCaretLeft, BiSearch } from "react-icons/bi";
import { BsXCircle } from "react-icons/bs";

export default function PrevDetail({ dataPrev }) {
  const [searchText, setSearchText] = useState("");
  const [dataLoading, setdataLoading] = useState(true);
  const { pathname } = useLocation();
  const dataRef = useRef([]);
  const modalRef = useRef();
  const [modalText, setModalText] = useState([]);
  const [modalTextInfo, setModalTextInfo] = useState();

  useEffect(() => {
    setdataLoading(false);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleModal = (event) => {
    if (event.target.parentElement.dataset.name !== undefined) {
      setModalText([
        event.target.parentElement.dataset.name,
        event.target.parentElement.dataset.artist,
        event.target.parentElement.dataset.img,
        event.target.parentElement.dataset.place,
        event.target.parentElement.dataset.start,
        event.target.parentElement.dataset.end,
        event.target.parentElement.dataset.link,
      ]);
      if (event.target.parentElement.dataset.info.length > 700) {
        setModalTextInfo(
          event.target.parentElement.dataset.info.substr(0, 700) + "..."
        );
      } else {
        setModalTextInfo(event.target.parentElement.dataset.info + ` `);
      }
      modalRef.current.classList.remove("hidden");
    }
  };

  const handleModalCloseBtn = () => {
    modalRef.current.classList.add("hidden");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < dataPrev.length; i++) {
      dataRef.current.children[i].classList.remove("hidden");
      if (
        dataRef.current.children[i].innerText.includes(searchText) === false &&
        dataRef.current.children[i].children[2].innerText.includes(
          searchText
        ) === false
      ) {
        dataRef.current.children[i].classList.add("hidden");
      } else if (searchText === "") {
        dataRef.current.children[i].classList.remove("hidden");
      }
    }
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex w-[100%] h-[100vh]">
      <div
        ref={modalRef}
        className="w-[84%] h-[100%] ml-[16%] fixed bg-black opacity-90 z-[1] hidden"
      >
        <BsXCircle
          onClick={handleModalCloseBtn}
          size={25}
          color="white"
          className="absolute top-[3%] left-[96%] z-[2] hover:cursor-pointer"
        />
        <div className="flex p-10">
          <div>
            <div className="flex mb-5">
              <div className="w-2 h-[4.2rem] bg-white mr-4"></div>
              <div>
                <div className="z-[2] text-white text-4xl mb-1">
                  {modalText[0]}
                </div>
                <div className="z-[2] text-white text-base">{modalText[1]}</div>
              </div>
            </div>
            <div className="z-[2] text-white ml-6">
              전시 장소 | {modalText[3]}
            </div>
            <div className="z-[2] text-white ml-6">
              전시 기간 | {modalText[4]} ~ {modalText[5]}
            </div>
            <div className="flex mt-5 mr-10">
              <div className="z-[2] text-white mt-5 ml-6 text-justify">
                {modalTextInfo}
                <a
                  href={modalText[6]}
                  target="_blank"
                  className="italic text-gray-500 hover:text-indigo-500"
                >
                  전시 상세 홈페이지
                </a>
              </div>
              <img
                src={modalText[2]}
                className="h-[300px] z-[2] mt-5 ml-6 p-2"
              />
            </div>
          </div>
        </div>
      </div>
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
        <div className="flex items-center">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <BiSearch
              size={25}
              color="white"
              className="hover:cursor-pointer ml-3 mr-2"
            />
            <input
              value={searchText}
              onChange={handleTextChange}
              placeholder="제목, 이름으로 검색"
              className="w-[100%] h-7 py-4 px-3 mr-5 bg-black border border-white text-white"
            />
          </form>
        </div>
      </div>
      <div className="w-[84%] ml-[16%] p-12">
        <div className="flex w-[100%] mb-5 ml-5">
          <div className="w-2 h-[5.2rem] bg-black mr-5"></div>
          <div className="flex flex-col">
            <div className="text-5xl my-1">지난 전시</div>
            <div className="text-lg">
              2022년 한 해 동안의 서울시립미술관 전시를 확인해보세요
            </div>
          </div>
        </div>
        <div
          className="w-[100%] h-[50%] flex flex-wrap justify-start"
          ref={dataRef}
        >
          {dataLoading ? (
            <div>Loading...</div>
          ) : (
            dataPrev.map((item, index) => (
              <div
                key={index}
                onClick={handleModal}
                data-name={item.DP_NAME}
                data-artist={item.DP_ARTIST}
                data-img={item.DP_MAIN_IMG}
                data-place={item.DP_PLACE}
                data-start={item.DP_START}
                data-end={item.DP_END}
                data-artpart={item.DP_ART_PART}
                data-artcnt={item.DP_ART_CNT}
                data-info={item.DP_INFO}
                data-link={item.DP_LNK}
                className="px-5 py-3 w-[23%] h-[100%] flex flex-col hover:cursor-pointer hover:scale-105 duration-100 drop-shadow-lg"
              >
                <img
                  src={item.DP_MAIN_IMG}
                  className="w-[100%] h-[70%] p-2 object-cover bg-white"
                />
                <div className="m-2 mt-3">{item.DP_NAME}</div>
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
