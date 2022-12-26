import React, {
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
  useSyncExternalStore,
} from "react";
import { useLocation } from "react-router-dom";

export default function PrevDetail({ dataPrev }) {
  const [searchText, setSearchText] = useState("");
  const [submitText, setSubmitText] = useState("");
  const [dataLoading, setdataLoading] = useState(true);
  const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [start, setStart] = useState([2021, 1]);
  const [end, setEnd] = useState([2023, 12]);

  const { pathname } = useLocation();

  const dataRef = useRef([]);
  const dataArr = [];
  for (let i = 0; i < 8; i++) {
    dataArr[i] = dataPrev[i];
  }

  useEffect(() => {
    setdataLoading(false);
  }, [pathname]);

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitText(searchText);
    for (let i = 0; i < dataPrev.length; i++) {
      dataRef.current.children[i].classList.remove("hidden");
      if (
        dataRef.current.children[i].innerText.includes(submitText) === false &&
        dataRef.current.children[i].children[2].innerText.includes(
          submitText
        ) === false
      ) {
        dataRef.current.children[i].classList.add("hidden");
      } else if (submitText === "") {
        dataRef.current.children[i].classList.remove("hidden");
      }
    }
  };

  const handleClick = () => {
    for (let i = 0; i < dataPrev.length; i++) {
      const startDate = dataRef.current.children[i].children[3].innerText;
      const endDate = dataRef.current.children[i].children[4].innerText;
      dataRef.current.children[i].classList.remove("hidden");
      console.log("2022-11-30" > `${start[0]}-${start[1]}-1`);
      if (
        startDate < `${start[0]}-${start[1]}-1` ||
        endDate > `${end[0]}-${end[1]}-31`
      ) {
        dataRef.current.children[i].classList.add("hidden");
      }
    }
  };

  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleStartClick = (event) => {
    if (event.target.name === "year") {
      setStart([parseInt(event.target.value), start[1]]);
    } else if (event.target.name === "month") {
      setStart([start[0], parseInt(event.target.value)]);
    }
  };

  const handleEndClick = (event) => {
    if (event.target.name === "year") {
      setEnd([parseInt(event.target.value), end[1]]);
    } else if (event.target.name === "month") {
      setEnd([end[0], parseInt(event.target.value)]);
    }
  };

  return (
    <div className="w-[100%] h-[100vh] p-12">
      <div className="flex">
        <div className="w-2 h-12 bg-black mr-5"></div>
        <div className="text-5xl">지난 전시</div>
      </div>
      <form onSubmit={handleSubmit} className="p-3">
        <span>이름</span>
        <input
          placeholder="작품 및 아티스트 이름으로 검색해보세요"
          type="text"
          value={searchText}
          onChange={handleTextChange}
          className="w-[30%] drop-shadow-md p-2 px-3 mx-5"
        />
      </form>
      <div className="p-3">
        <span>기간</span>
        <span className="pl-5" onClick={handleStartClick}>
          <span>전시 시작일</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="year"
            defaultValue={2021}
          >
            <option>2022</option>
            <option>2021</option>
          </select>
          <span>년</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="month"
            defaultValue={1}
          >
            {monthList.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <span>월</span>
        </span>
        <span className="pl-5" onClick={handleEndClick}>
          <span>전시 종료일</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="year"
            defaultValue={2023}
          >
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
          <span>년</span>
          <select
            className="p-2 px-3 text-center drop-shadow-md"
            name="month"
            defaultValue={12}
          >
            {monthList.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <span>월</span>
        </span>
        <button onClick={handleClick} type="submit">
          검색
        </button>
      </div>

      <div
        className="w-[100%] h-[100%] flex flex-wrap justify-center content-start"
        ref={dataRef}
      >
        {dataLoading ? (
          <div>Loading...</div>
        ) : (
          dataPrev.map((item, index) => (
            <div
              key={index}
              className="m-3 w-[20%] h-[50%] flex flex-col hover:cursor-pointer drop-shadow-xl"
            >
              <img
                src={item.DP_MAIN_IMG}
                className="w-[100%] h-[80%] p-2 object-cover bg-white"
              />
              <div className="p-2">{item.DP_NAME}</div>
              <div className="hidden">{item.DP_ARTIST}</div>
              <div className="hidden">{item.DP_START}</div>
              <div className="hidden">{item.DP_END}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
