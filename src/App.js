import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NowDetail from "./NowDetail";
import PrevDetail from "./PrevDetail";
import Map from "./Map";

function App() {
  const [dataNow, setDataNow] = useState([]);
  const [dataPrev, setDataPrev] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dataPrevBanner = [];
  const dataPrevBanner2 = [];

  for (let i = 0; i < 20; i++) {
    if (i < 10) {
      dataPrevBanner.push(dataPrev[i]);
    } else {
      dataPrevBanner[i] = dataPrev[i - 10];
    }
  }

  for (let i = 0; i < 20; i++) {
    if (i < 10) {
      dataPrevBanner2.push(dataPrev[i + 10]);
    } else {
      dataPrevBanner2[i] = dataPrev[i];
    }
  }

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
          } else if (
            data[i].DP_END < `${year}-${month}-${day}` &&
            data[i].DP_END >= "2022-01-01"
          ) {
            dataPrev.push(data[i]);
          }
        }
        setIsLoading(false);
        sessionStorage.setItem("slideIndex", 0);
      }
    }
    getData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isLoading={isLoading}
            dataNow={dataNow}
            dataPrev={dataPrev}
            dataPrevBanner={dataPrevBanner}
            dataPrevBanner2={dataPrevBanner2}
          />
        }
      />
      <Route
        path="/NowDetail/:index"
        element={<NowDetail dataNow={dataNow} />}
      />
      <Route path="/PrevDetail" element={<PrevDetail />} />
      <Route path="/Map/:index" element={<Map />} />
    </Routes>
  );
}

export default App;
