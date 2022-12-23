import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Map() {
  const { index } = useParams();
  const mapRef = useRef(null);

  const museumList = {
    0: {
      name: "서울시립미술관 서소문본관",
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220318141012_ed572a7d566c4aceb8998064d46a204a_4ca445f99fb7420994c0bebafe2de5da",
      description:
        "과거와 현대를 아우르며 모두가 만나고 경험하는 미술관입니다.",
      weekday: "오전 10시 - 오후 8시",
      weekend_summer: "오전 10시 - 오후 7시",
      weekend_winter: "오전 10시 - 오후 6시",
      culture: "오전 10시 - 오후 10시",
      closed_day: "매주 월요일",
      regular_closing_day: "1월 1일",
      opening_hour: "관람 종료 1시간 전까지 입장",
      admission: "무료 (*특별전 유료)",
      address: "서울시 중구 덕수궁길 61(서소문동)",
      phone: "02-2124-8800",
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
    <div className="w-[100vw] h-[100vh] p-10">
      <div className="flex">
        <div className="w-2 h-22 bg-black mr-5"></div>
        <div>
          <div className="text-5xl mb-2">{museumList[index].name}</div>
          <div className="text-2xl">{museumList[index].description}</div>
        </div>
      </div>
      <div className="mt-9 flex">
        <img
          src={museumList[index].img}
          className="w-[500px] h-[500px] object-cover"
        />
        <div className="flex flex-col">
          <div>이용시간</div>
          <div>화요일 - 금요일</div>
          <div>{museumList[index].weekday}</div>
          <div>토요일, 일요일, 공휴일 </div>
          <div>하절기(3-10월) {museumList[index].weekend_summer}</div>
          <div>동절기(11-2월) {museumList[index].weekend_winter}</div>
          <div>문화가 있는 날</div>
          <div>{museumList[index].culture}</div>
          <div>휴관</div>
          <div>{museumList[index].closed_day}</div>
          <div>정기휴관</div>
          <div>{museumList[index].regular_closing_day}</div>
          <div>입장안내</div>
          <div>{museumList[index].opening_hour}</div>
          <div>{museumList[index].admission}</div>
          <div>대표번호</div>
          <div>{museumList[index].phone}</div>
        </div>
      </div>
      {/*<div ref={mapRef} className="w-[30%] h-[60%]"></div>*/}
    </div>
  );
}
