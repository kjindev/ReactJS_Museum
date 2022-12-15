import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function App() {
  const [dataNow, setDataNow] = useState([]);
  const [dataPrev, setDataPrev] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [prevButtomVisible, setPrevButtonVisible] = useState(true);
  const [nextButtomVisible, setNextButtonVisible] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_API_KEY}/json/ListExhibitionOfSeoulMOAInfo/1/50/`
      );
      const result = await response.json();
      const data = await result.ListExhibitionOfSeoulMOAInfo.row;
      if (dataNow.length === 0) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].DP_END >= `${year}-${month}-${day}`) {
            dataNow.push(data[i]);
          } else {
            dataPrev.push(data[i]);
          }
        }
      }
      setIsLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    if (slideIndex === 0) {
      setPrevButtonVisible(false);
    } else if (slideIndex === 5) {
      setNextButtonVisible(false);
    } else {
      setPrevButtonVisible(true);
      setNextButtonVisible(true);
    }
  }, [slideIndex]);

  return (
    <div>
      <NavBar />
      <div className="flex flex-row justify-center">
        <div className="text-[60px] h-[90vh]">
          서울시립미술관은 시대와 미술의 변화에 부응하고, 서로를 채우며 성장해
          가는 네트워크 미술관입니다.
        </div>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="relative">
            <div>
              {prevButtomVisible && (
                <FiChevronLeft
                  size={40}
                  color="gray"
                  onClick={() => setSlideIndex(slideIndex - 1)}
                  className="absolute top-[50%] left-[10%] z-[1] hover:bg-white rounded-lg"
                />
              )}
              <div className="overflow-hidden">
                <div className="flex flex-row w-[600vw]">
                  {dataNow.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        transform: `translateX(-${slideIndex * 100}vw)`,
                        transitionDuration: "1s",
                      }}
                      className="relative w-screen h-[100vh] bg-zinc-300"
                    >
                      <img
                        src={item.DP_MAIN_IMG}
                        className="absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%] object-cover w-[300px] h-[400px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {nextButtomVisible && (
                <FiChevronRight
                  size={40}
                  color="gray"
                  onClick={() => setSlideIndex(slideIndex + 1)}
                  className="absolute top-[50%] left-[90%] z-[1] hover:bg-white rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
