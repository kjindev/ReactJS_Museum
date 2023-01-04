import React from "react";

export default function Intro() {
  const imgLink = [
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220921153612_ea5e42079eb544e9b5f3b5b09a069a21_a434b534d9fc44b58c860ee0b70cdab9",
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220922152222_26fbc031113c43629110f6ef0adf096b_9c6d79ec23154e53bceb449d5090e252",
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20221004135647_566e3658ec72436b9308999a2ae584c9_fe5b5fac7a0143bab1841811ceb06b97",
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220629141941_2d967fedcb744aa0a69daf00c8f77499_9bf494ebcc3341099b68e1e99bddf412",
  ];

  return (
    <div className="w-[100%] h-[100vh] pt-12 p-4">
      <div className="relative">
        <div className="flex flex-wrap justify-center content-start mb-7">
          {imgLink.map((item, index) => (
            <div
              className="flex justify-center drop-shadow-lg w-[50%] h-[30%] p-1"
              key={index}
            >
              <img
                src={item}
                loading="lazy"
                className="w-[100%] h-[180px] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="lg:absolute lg:top-[95%] lg:left-9">
          <div className="lg:text-7xl text-5xl mb-5">
            서울시립미술관 전시안내
          </div>
          <div className="lg:text-2xl text-base">
            <div className="mb-1">시대와 미술의 변화에 부응하고</div>
            <div>서로를 채우며 성장해 가는 네트워크 미술관</div>
          </div>
        </div>
      </div>
    </div>
  );
}
