import FadeInSection from "@/components/fade-in-section";
import { Phone } from "lucide-react";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaGithub, FaLine, FaLinkedin, FaRegEnvelope, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col py-16 px-5 lg:px-20 relative gap-3 bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300">
      <div className="w-full absolute top-0 left-0 bg-black/92 inset-0 z-30"></div>
      <FadeInSection className="w-full flex flex-col lg:flex-row gap-5 h-2/3 items-start lg:justify-around ">
        <FadeInSection className="flex flex-col gap-1 items-start z-30">
          <p className="text-3xl font-bold bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Pondfolio
          </p>
          <p className="text-lg lg:text-xl text-gray-300">
            {"<"}Programmer and Mobile Developer{"/>"}
          </p>
          <FadeInSection className={"mt-1 flex items-center gap-3"}>
            <Link
              href="https://www.facebook.com/pathomporn.wongsuwan"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-blue-500 hover:bg-gray-900"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-green-500 hover:bg-gray-900"
            >
              <FaLine size={20} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-cyan-500 hover:bg-gray-900"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-red-500 hover:bg-gray-900"
            >
              <FaYoutube size={20} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-purple-500 hover:bg-gray-900"
            >
              <FaTiktok size={20} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-white hover:bg-gray-900"
            >
              <FaGithub size={20} />
            </Link>
          </FadeInSection>
        </FadeInSection>
        <FadeInSection className="flex flex-col gap-3.5 items-start z-30">
          <p className="text-xl font-bold text-gray-50">Contact</p>
          <span className="flex items-center gap-2.5 text-sm mt-1">
            <Phone color="green" size={20} />
            <p className="text-gray-300 ">: 096-585-0195</p>
          </span>
          <Link
            href={"https://www.facebook.com/pathomporn.wongsuwan"}
            className="hover:underline flex items-center gap-2.5 text-sm"
          >
            <FaFacebookF color="blue" size={20} />
            <p className="text-gray-300 ">: Pathomporn Wongsuwan</p>
          </Link>
          <span className="flex items-center gap-2.5 text-sm">
            <FaLine color="green" size={20} />
            <p className="text-gray-300 ">: pond0947035487</p>
          </span>
          <span className="flex items-center gap-2.5 text-sm">
            <FaRegEnvelope color="red" size={18} />
            <p className="text-gray-300 ">: pathomporn.wongsuwan@gmail.com</p>
          </span>
        </FadeInSection>
        <FadeInSection className="flex flex-col gap-3.5 items-start z-30">
          <p className="text-xl font-bold text-gray-50">Projects</p>
          <Link
            href="/"
            className="ml-4 hover:text-white transition-all hover:underline"
          >
            <li className="text-sm text-gray-300">Alumni System</li>
          </Link>
          <Link
            href="/"
            className="ml-4 hover:text-white transition-all hover:underline"
          >
            <li className="text-sm text-gray-300">Ezy-Ecommerce</li>
          </Link>
          <Link
            href="/"
            className="ml-4 hover:text-white transition-all hover:underline"
          >
            <li className="text-sm text-gray-300">Cartzy</li>
          </Link>
        </FadeInSection>
      </FadeInSection>
      <div className="mt-14 pt-10 border-t w-full text-gray-200 text-xs text-center border-gray-700 z-30">
        © 2025.All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
