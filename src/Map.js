import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { BiCaretLeft, BiMap, BiCheckSquare } from "react-icons/bi";

export default function Map() {
  const { index } = useParams();
  const mapRef = useRef(null);
  const infoRef = useRef();

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
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220513095232_c0ebb8e285034548af730cffb2bdd055_b4f14662ffb84f0da2f672fc2053852d",
      description: "지역 공동체와 상생하는 개방형 미술관입니다.",
      weekday: "오전 10시 - 오후 8시",
      weekend_summer: "오전 10시 - 오후 7시",
      weekend_winter: "오전 10시 - 오후 6시",
      culture: "오전 10시 - 오후 10시",
      closed_day: "매주 월요일",
      regular_closing_day: "1월 1일",
      opening_hour: "관람 종료 1시간 전까지 입장",
      admission: "무료 (*특별전 유료)",
      address: "서울시 노원구 동일로 1238(중계동)",
      phone: "02-2124-8800",
      Lat: 37.6407938,
      Lng: 127.0667628,
    },
    2: {
      name: "서울시립 남서울미술관",
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220318141104_0cec42e25349445b9e597098ca952391_17219a61af5948dcbbdb382af726a363",
      description: "역사의 정취가 가득한, 오래 머물고 싶은 미술관입니다.",
      weekday: "오전 10시 - 오후 8시",
      weekend: "오전 10시 - 오후 6시",
      closed_day: "매주 월요일",
      regular_closing_day: "1월 1일",
      opening_hour: "관람 종료 1시간 전까지 입장",
      admission: "무료",
      address: "서울시 관악구 남부순환로 2076(남현동)",
      phone: "02-2124-8800",
      Lat: 37.4761313,
      Lng: 126.9795938,
    },
    3: {
      name: "서울시립 미술아카이브",
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220107193547_a78150f14adc45e59931073ab6cf1115_bd44dfffbdf7489e86516580e822982b",
      description: "미술사의 발자취를 좇아 미술의 역사를 보존하고 연구합니다.",

      address: "서울시 종로구 평창문화로 101(평창동)",
      phone: "02-2133-4191",
      Lat: 37.6103289,
      Lng: 126.9744456,
    },
    4: {
      name: "서울시립 난지미술창작스튜디오",
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220119170041_f2515359263f46f1b1f7e9581be90baa_324511ebbfe249c8a30361a024ab33a1",
      description:
        "미술인들의 레지던시 공간으로, 역량 있는 국내외 작가와 연구자를 양성하고 지원합니다.",
      weekday: "오전 10시 - 오후 6시",
      weekend_summer: "오전 10시 - 오후 7시",
      weekend_winter: "오전 10시 - 오후 6시",
      culture: "오전 10시 - 오후 10시",
      closed_day: "매주 월요일",
      regular_closing_day: "1월 1일",
      opening_hour: "관람 종료 30분 전까지 입장",
      admission: "무료",
      address: "서울 마포구 하늘공원로 108-1(상암동)",
      phone: "02-2124-8800",
      Lat: 37.5690289,
      Lng: 126.8785234,
    },
    5: {
      name: "SeMA 벙커",
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220119161909_eac3c04784d249a2bd2cdc14aa2b6f64_f5eebbf92d60485ab307008aba5a1ba5",
      description:
        "1970년대 군사 정권 시절 지어진 것으로 추정되는 벙커가 미술 공간으로 탈바꿈했습니다.",
      weekday: "오전 11시 - 오후 7시",
      weekend: "오전 11시 - 오후 7시",
      closed_day: "매주 월요일",
      regular_closing_day: "1월 1일",
      opening_hour: "관람 종료 30분 전까지 입장",
      admission: "무료",
      address: "서울 영등포구 여의대로 지하 76(여의도동)",
      phone: "02-2124-8942",
      Lat: 37.5254177,
      Lng: 126.9242075,
    },
    6: {
      name: "SeMA 창고",
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220119170004_e0060b4359424cf4b16665a26262236b_38dd7561a710400d92d8ce97d7c7efa6",
      description: "옛 질병 본부의 시약 창고를 활용한 실험적인 공간입니다.",
      weekday: "오전 11시 - 오후 7시",
      weekend: "오전 11시 - 오후 7시",
      closed_day: "매주 월요일",
      regular_closing_day: "1월 1일",
      opening_hour: "관람 종료 30분 전까지 입장",
      admission: "무료",
      address: "서울 은평구 통일로 684(서울혁신파크 5동)",
      phone: "02-2124-8946",
      Lat: 37.6092596,
      Lng: 126.9342695,
    },
    7: {
      name: "SeMA 백남준기념관",
      img: "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fit%2FITRA0%2F2022%2F&FILE_NM=20220119162110_0db45f47f85e476e9f36e2d720bd7bbd_0ee2d7a1a5314f31b335802e9796f6fd",
      description: "세계적인 현대 예술가 백남준을 기억하고 기념합니다.",
      weekday: "오전 10시 - 오후 7시",
      weekend: "오전 10시 - 오후 7시",
      closed_day: "매주 월요일",
      regular_closing_day: "1월 1일",
      opening_hour: "관람 종료 30분 전까지 입장",
      admission: "무료",
      address: "서울 종로구 종로53길 12-1(창신동)",
      phone: "02-2124-5268",
      Lat: 37.5730106,
      Lng: 127.0137485,
    },
  };

  const handleInfoClick = () => {
    infoRef.current.classList.remove("hidden");
    mapRef.current.classList.add("hidden");
  };

  const handleMapClick = () => {
    mapRef.current.classList.remove("hidden");
    infoRef.current.classList.add("hidden");
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
    <div className="w-[100vw] h-[100vh]">
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
        <div
          onClick={handleInfoClick}
          className="flex items-center my-3 hover:cursor-pointer"
        >
          <BiCheckSquare color="white" size={27} className="ml-2 mr-1" />
          <div className="text-white ">이용 안내</div>
        </div>
        <div
          onClick={handleMapClick}
          className="flex items-center my-3 hover:cursor-pointer"
        >
          <BiMap color="white" size={27} className="ml-2 mr-1" />
          <div className="text-white ">지도</div>
        </div>
      </div>
      <div className="p-10 ml-[16%]">
        <div className="flex">
          <div className="w-2 h-22 bg-black mr-5"></div>
          <div>
            <div className="text-4xl mb-2">{museumList[index].name}</div>
            <div className="text-base">{museumList[index].description}</div>
          </div>
        </div>
        <div className="mt-9 flex" ref={infoRef}>
          <img
            src={museumList[index].img}
            className="w-[500px] h-[500px] object-cover bg-white p-2 drop-shadow-lg"
          />
          <div>이용 시간</div>
          <div>
            <div>화요일 - 금요일</div>
            <div>{museumList[index].weekday}</div>
          </div>
          <div>
            <div rowspan="2">주말, 공휴일 </div>
            <div>하절기(3-10월) {museumList[index].weekend_summer}</div>
          </div>
          <div>
            <div>동절기(11-2월) {museumList[index].weekend_winter}</div>
          </div>
          <div>
            <div>문화가 있는 날</div>
            <div>{museumList[index].culture}</div>
          </div>
          <div>
            <div>휴관</div>
            <div>
              {museumList[index].closed_day},{" "}
              {museumList[index].regular_closing_day}(*정기휴관)
            </div>
          </div>
          <div>
            <div>입장 시간</div>
            <div>{museumList[index].opening_hour}</div>
          </div>
          <div>
            <div>입장 가격</div>
            <div>{museumList[index].admission}</div>
          </div>{" "}
          <div>
            <div>대표번호</div>
            <div>{museumList[index].phone}</div>
          </div>
        </div>
      </div>
      <div ref={mapRef} className="w-[30%] h-[60%] p-10 ml-[16%] hidden"></div>
    </div>
  );
}
