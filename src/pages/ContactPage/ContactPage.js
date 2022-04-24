import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs/";
import { GrMail } from "react-icons/gr";
export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <h1 className="text-2xl text-bold text-red-500">
        Cảm ơn bạn đã ghé thăm website này
      </h1>
      <p className="text-lg font-normal">
        Mọi thắc mắc xin vui lòng liên hệ đến nhà phát triển phần mềm thông qua:
      </p>

      <ul className="w-40">
        <li className="flex justify-start items-center space-x-2 text-lg">
          <BsFacebook size={"40px"} color="#1298f6" className="mb-2" />
          <a
            className="pb-1 text-black font-medium hover:text-blue-500"
            href="https://www.facebook.com/profile.php?id=100005753327465"
          >
            My facebook
          </a>
        </li>
        <li className="flex justify-start  items-center space-x-2 text-lg">
          <GrMail size={"40px"} color={"#ea4335"} className="mb-2" />
          <a
            className="pb-1 text-black font-medium hover:text-red-500"
            href="https://www.mail.google.com/"
          >
            binhcyber211997@gmail.com
          </a>
        </li>
        <li className="flex justify-start items-center space-x-2 text-lg">
          <BsGithub size={"40px"} className="mb-2" />
          <a
            className="pb-1 text-black font-medium hover:text-gray-500"
            href="https://github.com/binhcyber"
          >
            My Github
          </a>
        </li>
      </ul>
    </div>
  );
}
