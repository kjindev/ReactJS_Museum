import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Map() {
  const { index } = useParams();
  const mapRef = useRef(null);

  const museumList = {
    0: {
      name: "서울시립미술관 서소문본관",
      Lat: 37.5640625,
      Lng: 126.9738125,
    },
    1: {
      name: "서울시립 북서울미술관",
      Lat: 37.6407938,
      Lng: 127.0667628,
    },
    2: {
      name: "서울시립 남서울미술관",
      Lat: 37.4761313,
      Lng: 126.9795938,
    },
    3: {
      name: "서울시립 미술아카이브",
      Lat: 37.6103289,
      Lng: 126.9744456,
    },

    4: {
      name: "서울시립 난지미술창작스튜디오",
      Lat: 37.5690289,
      Lng: 126.8785234,
    },
    5: { name: "SeMA 벙커", Lat: 37.5254177, Lng: 126.9242075 },
    6: { name: "SeMA 창고", Lat: 37.6092596, Lng: 126.9342695 },
    7: { name: "SeMA 백남준기념관", Lat: 37.5730106, Lng: 127.0137485 },
  };

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(
        museumList[index].Lat,
        museumList[index].Lng
      );
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17,
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div ref={mapRef} className="w-[30%] h-[60%]"></div>
      <div>{museumList[index].name}</div>
    </div>
  );
}
