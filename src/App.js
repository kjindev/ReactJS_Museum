import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function App() {
  const [dataNow, setDataNow] = useState([]);
  const [dataPrev, setDataPrev] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      for (let i = 0; i < data.length; i++) {
        if (data[i].DP_END >= `${year}-${month}-${day}`) {
          dataNow.push(data[i]);
        } else {
          dataPrev.push(data[i]);
        }
      }
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="p-[30px] mx-[7px]">
      <NavBar />
      <div className="flex flex-row justify-center">
        <div className="text-[60px] z-1">
          서울시립미술관은 시대와 미술의 변화에 부응하고, 서로를 채우며 성장해
          가는 네트워크 미술관입니다.
        </div>
        {
          <img
            src="http://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20221212164005_684d745194544198b8d893e2994842bd_07e7b2e1f9b145d5ace2d8fd9ebfe15b"
            className="w-[40%] object-cover"
          />
        }
      </div>
      <div>
        <div>현재 전시 정보</div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {dataNow.map((item) => (
              <div key={item.DP_SEQ} className="w-full flex flex-row">
                <img
                  src={item.DP_MAIN_IMG}
                  className="w-[300px] h-[400px] object-cover"
                />
                <div>{item.DP_START}</div>
                <div>{item.DP_END}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>지난 전시 정보</div>
      <div>찾아오는 길</div>
      <div>홈페이지 정보</div>
    </div>
  );
}

export default App;
