import React from "react";

export default function Intro() {
  const imgLink = [
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220921153612_ea5e42079eb544e9b5f3b5b09a069a21_a434b534d9fc44b58c860ee0b70cdab9",
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220922152222_26fbc031113c43629110f6ef0adf096b_9c6d79ec23154e53bceb449d5090e252",
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20221004135647_566e3658ec72436b9308999a2ae584c9_fe5b5fac7a0143bab1841811ceb06b97",
    "https://sema.seoul.go.kr/common/imageView?FILE_PATH=%2Fex%2FEXI01%2F2022%2F&FILE_NM=20220629141941_2d967fedcb744aa0a69daf00c8f77499_9bf494ebcc3341099b68e1e99bddf412",
  ];

  return (
    <div className="h-[100vh] px-[100px]">
      <div className="w-[100%] flex flex-col pt-[7%]">
        <div className="flex flex-row justify-center mb-[50px]">
          {imgLink.map((item, index) => (
            <div className="mx-[20px] drop-shadow-lg" key={index}>
              <img src={item} className="w-[300px] h-[300px] object-cover" />
            </div>
          ))}
        </div>
        <div className="flex flex-col pl-[10%]">
          <div className="text-[70px]">서울시립미술관 전시안내</div>
          <div className="text-[22px]">
            <div>시대와 미술의 변화에 부응하고</div>
            <div>서로를 채우며 성장해 가는 네트워크 미술관</div>
          </div>
        </div>
      </div>
    </div>
  );
}
