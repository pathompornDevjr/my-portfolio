"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import uuid from "@/libs/uuid-vs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const router = useRouter();

  const menus = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Me",
      url: "/#aboutme",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setShowResponsiveMenu(false);
      }
    };

    // เรียกครั้งแรกทันทีเมื่อโหลด
    handleResize();

    // listen เมื่อมีการเปลี่ยนขนาดหน้าจอ
    mediaQuery.addEventListener("change", handleResize);

    // cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-900 border-b border-gray-600 shadow-sm z-50 p-3 px-7 flex items-center justify-between">
      <Link
        href="/"
        className="text-2xl font-bold bg-gradient-to-r from-green-400  to-blue-500 bg-clip-text text-transparent"
      >
        Pondfolio
      </Link>

      <button
        onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
        className="md:hidden text-gray-200 p-2.5 rounded-full hover:bg-gray-700 hover:ring hover:ring-gray-500"
      >
        {showResponsiveMenu ? <FaX size={20} /> : <FaBars size={20} />}
      </button>
      <div className="md:flex items-center gap-8 hidden text-gray-200">
        {menus.map((m) => (
          <Link
            key={uuid()}
            href={m.url}
            className="text-sm relative before:absolute before:bottom-0 before:h-0.5 hover:scale-105  hover:text-gray-50 before:bg-gray-100 before:hover:shadow-lg before:w-0 before:transition-all before:left-0 transition-all duration-300 hover:before:w-[85%]"
          >
            {m.title}
          </Link>
        ))}

        <button className="p-2.5 rounded-md shadow-sm bg-gradient-to-r from-blue-500 to-green-500 text-sm relative hover:scale-105 hover:text-gray-50 px-3 transition-all duration-300 hover:before:w-[85%]">
          Hire Me!
        </button>
      </div>

      {/* responsive menu */}
      <div
        className={`${
          showResponsiveMenu ? "flex" : "hidden"
        } fixed top-14 left-0 w-full border-t border-gray-600 p-2 text-gray-200 flex-col  bg-gray-900`}
      >
        {menus.map((m) => (
          <button
            key={uuid()}
            onClick={() => {
              router.push(m?.url);
              setShowResponsiveMenu(false);
            }}
            className="text-sm p-3.5 hover:bg-gray-800 relative before:absolute before:bottom-0 before:h-0.5  hover:text-gray-50 before:bg-gray-100 before:hover:shadow-lg before:w-0 before:transition-all before:left-0 transition-all duration-300 hover:before:w-full"
          >
            {m.title}
          </button>
        ))}

        <button className="p-2.5 mt-3 rounded-md shadow-sm bg-gradient-to-r from-blue-500 to-green-500 text-sm relative hover:text-gray-50 px-3 transition-all duration-300 hover:before:w-[85%]">
          Hire Me!
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
