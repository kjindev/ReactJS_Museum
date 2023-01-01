import React from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";

export default function Information() {
  const onCopy = (event) => {
    window.navigator.clipboard.writeText(event.target.innerText);
    event.target.innerText = "복사됨 :]";

    const textChange = () => {
      event.target.innerText = "pkjin.eng@gmail.com";
    };

    setTimeout(textChange, 800);
  };
  return (
    <div className="w-[100%] h-[40vh] relative">
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex px-3 pb-3">
          <AiOutlineMail size={25} className="mr-2" />
          <div
            onClick={onCopy}
            className="text-center hover:cursor-pointer hover:text-gray-500"
          >
            pkjin.eng@gmail.com
          </div>
        </div>
        <div className="flex px-3">
          <AiFillGithub size={25} className="mr-2" />
          <a
            className="text-center hover:cursor-pointer hover:text-gray-500"
            href="https://github.com/kjindev"
            target="_blank"
          >
            https://github.com/kjindev
          </a>
        </div>
      </div>
    </div>
  );
}
