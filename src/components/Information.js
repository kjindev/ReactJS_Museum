import React from "react";
import {
  AiOutlineMail,
  AiFillGithub,
  AiOutlineCheck,
  AiFillFolder,
} from "react-icons/ai";

export default function Information() {
  const onCopy = (event) => {
    window.navigator.clipboard.writeText(event.target.innerText);
    event.target.innerText = "이메일 주소 복사됨";

    const textChange = () => {
      event.target.innerText = "pkjin.eng@gmail.com";
    };

    setTimeout(textChange, 800);
  };
  return (
    <div className="w-[100%] h-[40vh] bg-black text-white text-sm flex justify-center items-center">
      <div>
        <div className="flex px-3 py-1 items-center">
          <AiOutlineCheck size={22} className="mr-3" />
          <div className="text-center">
            포트폴리오용으로 제작된 개인 사이트입니다. :]
          </div>
        </div>

        <div className="flex px-3 py-1 items-center">
          <AiOutlineMail size={22} className="mr-3" />
          <div
            onClick={onCopy}
            className="text-center hover:cursor-pointer hover:text-gray-500"
          >
            이메일 | pkjin.eng@gmail.com
          </div>
        </div>
        <div className="flex px-3 py-1 items-center">
          <AiFillGithub size={22} className="mr-3" />
          <a
            className="text-center hover:cursor-pointer hover:text-gray-500"
            href="https://github.com/kjindev"
            target="_blank"
          >
            깃허브 | https://github.com/kjindev
          </a>
        </div>
        <div className="flex px-3 py-1 items-center">
          <AiFillFolder size={22} className="mr-3" />
          <a
            className="text-center hover:cursor-pointer hover:text-gray-500"
            href="https://inthedev.tistory.com"
            target="_blank"
          >
            블로그 | https://inthedev.tistory.com
          </a>
        </div>
      </div>
    </div>
  );
}
