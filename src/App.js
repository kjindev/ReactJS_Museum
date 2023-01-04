import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NowDetail from "./NowDetail";
import PrevDetail from "./PrevDetail";
import Map from "./Map";

function App() {
  const [dataNow, setDataNow] = useState([]);
  const [dataPrev, setDataPrev] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isWindow, setIsWindow] = useState(false);

  const dataPrevBanner = [];
  const dataPrevBanner2 = [];

  const scrollRef = useRef([]);

  const [navName, setNavName] = useState("intro");

  const options = { threshold: 0.5 };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setNavName(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsWindow(true);
    }
  }, [isWindow]);

  const handleScroll = () => {
    if (scrollRef.current[0] !== null) {
      scrollRef.current.forEach((el) => observer.observe(el));
    }
  };

  if (isWindow) {
    window.addEventListener("scroll", handleScroll);
  }

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
  let month = date.getMonth() + 1;
  let day = date.getDate();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_API_KEY}/json/ListExhibitionOfSeoulMOAInfo/1/50/`
      );
      const result = await response.json();
      const data = await result.ListExhibitionOfSeoulMOAInfo.row;
      if (dataNow.length === 0) {
        for (let i = 0; i < data.length; i++) {
          if (data !== undefined) {
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("<p>", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("</p>", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("&nbsp;", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("<br>", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("<strong>", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("</strong>", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("</span>", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("&lt;", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll("&gt;", "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll('<p dir="ltr">', "");
            data[i].DP_INFO = data[i].DP_INFO.replaceAll(
              '<span style="font-size: 18px;">',
              ""
            );
            data[i].DP_INFO = data[i].DP_INFO.replaceAll(
              '<span style="font-size: 18px; color: rgb(184, 49, 47);">',
              ""
            );
          }
          if (month < 10 && day < 10) {
            if (data[i].DP_END >= `${year}-0${month}-0${day}`) {
              dataNow.push(data[i]);
            } else {
              dataPrev.push(data[i]);
            }
          } else if (month < 10 && day >= 10) {
            if (data[i].DP_END >= `${year}-0${month}-${day}`) {
              dataNow.push(data[i]);
            } else {
              dataPrev.push(data[i]);
            }
          } else if (month >= 10 && day < 10) {
            if (data[i].DP_END >= `${year}-${month}-0${day}`) {
              dataNow.push(data[i]);
            } else {
              dataPrev.push(data[i]);
            }
          } else {
            if (data[i].DP_END >= `${year}-${month}-${day}`) {
              dataNow.push(data[i]);
            } else {
              dataPrev.push(data[i]);
            }
          }
        }
        setIsLoading(false);
        sessionStorage.setItem("slideIndex", 0);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoading={isLoading}
              dataNow={dataNow}
              dataPrevBanner={dataPrevBanner}
              dataPrevBanner2={dataPrevBanner2}
              scrollRef={scrollRef}
              navName={navName}
              isWindow={isWindow}
            />
          }
        />
        <Route
          path="/NowDetail/:index"
          element={<NowDetail dataNow={dataNow} />}
        />
        <Route
          path="/PrevDetail"
          element={<PrevDetail dataPrev={dataPrev} isLoading={isLoading} />}
        />

        <Route path="/Map/:index" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
