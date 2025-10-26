import heroBg from "@/assets/hero-bg.jpg";
import Image from "next/image";
import FadeInSection from "@/components/fade-in-section";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaConnectdevelop,
  FaCss3,
  FaDatabase,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLine,
  FaLinkedin,
  FaMobile,
  FaNetworkWired,
  FaNodeJs,
  FaReact,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import MeImg from "@/assets/me.png";
import { Code, Code2, Wind } from "lucide-react";
import {
  SiBackbonedotjs,
  SiExpress,
  SiExpressvpn,
  SiFrontendmentor,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiProgress,
  SiReact,
} from "react-icons/si";

const Home = () => {

  return (
    <div className="w-full h-auto flex flex-col">
      {/* hero section */}
      <div className="relative w-full h-screen pt-36 py-20 p-5 flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-gray-900 via-gray-800">
        <div className="absolute inset-0 bg-black/75 z-20" />
        <Image
          src={heroBg}
          className="absolute top-0 left-0 w-full h-full"
          alt="hero_bg"
          priority
        />
        <div className="flex items-center flex-col gap-3.5 z-30">
          <FadeInSection className="p-3 rounded-full border border-blue-500 text-green-50 bg-black/20 ">
            Hi! Welcome to Pondfolio!
          </FadeInSection>
          <FadeInSection className={""}>
            <p className="md:text-6xl text-xl font-bold text-gray-50">
              I'm Pathomporn Wongsuwan
            </p>
          </FadeInSection>
          <FadeInSection className={"flex items-center gap-2"}>
            <p className="md:text-2xl font-semibold  bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {"<"}Programmer
            </p>
            <p className="md:text-2xl font-semibold  text-gray-300">And</p>
            <p className="md:text-2xl font-semibold  bg-gradient-to-l from-green-400 to-blue-400 bg-clip-text text-transparent">
              Mobile developer{"/>"}
            </p>
          </FadeInSection>
          <FadeInSection
            className={
              "flex flex-col lg:flex-row items-center gap-3 lg:gap-8 md:mt-2"
            }
          >
            <Link
              href="/projects"
              className="p-3 flex items-center gap-3 rounded-xl transition-all shadow-sm text-gray-50 hover:scale-105 bg-gradient-to-r from-blue-600 to-cyan-600"
            >
              <p> see my projects</p>
              <FaArrowRight />
            </Link>
            <a
              href="/files/Pathomporn_Wongsuwan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-green-500 rounded-xl text-gray-50 px-10 transition-all shadow-sm hover:scale-105"
            >
              My Resume
            </a>
          </FadeInSection>
        </div>
      </div>
      {/* aboutme */}
      <div
        id="aboutme"
        className="w-screen pt-24 lg:h-2/3 bg-black/97 p-8 flex lg:flex-row gap-10 lg:gap-0 lg:justify-evenly flex-col items-center justify-center"
      >
        <FadeInSection
          className={"lg:w-1/4 rounded-full border border-blue-600 "}
        >
          <Image
            alt="me"
            src={MeImg}
            className="w-full"
            width={500}
            height={500}
            priority
          />
        </FadeInSection>
        <FadeInSection
          className={"text-gray-50 flex flex-col gap-1 lg:mt-0 lg:w-1/3"}
        >
          <p className="md:text-4xl text-2xl font-bold"> About Me</p>
          <p className="text-gray-300  mt-3 text-xs lg:text-[0.9rem]">
            "Hello! My name is Pathomporn Wongsuwan, but you can call me
            PangPond. I'm currently 20 years old. I began my journey into
            programming at age 18, and since then, I've developed an alumni
            management system, an e-commerce platform, and a mobile application
            called Cartzy. I also have several other projects currently in
            development, which you can explore by{" "}
            <Link
              href="/"
              className="underline bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent"
            >
              clicking here
            </Link>
            . I'm passionate about system development and programming, viewing
            challenges as opportunities for growth. I'm responsible, dedicated,
            and constantly striving to improve my skills. Thank you for
            visiting, and I look forward to connecting with you!"
          </p>
          <p className="md:text-xl text-lg text-gray-200 font-bold mt-6">
            {" "}
            follow me on social media!
          </p>
          <FadeInSection className={"mt-1 flex items-center gap-3"}>
            <Link
              href="https://www.facebook.com/pathomporn.wongsuwan"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-blue-500 hover:bg-gray-900"
            >
              <FaFacebookF size={25} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-green-500 hover:bg-gray-900"
            >
              <FaLine size={25} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-cyan-500 hover:bg-gray-900"
            >
              <FaLinkedin size={25} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-red-500 hover:bg-gray-900"
            >
              <FaYoutube size={25} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-purple-500 hover:bg-gray-900"
            >
              <FaTiktok size={25} />
            </Link>
            <Link
              href="/"
              className="p-2.5 rounded-full transition-all border border-gray-500 text-white hover:bg-gray-900"
            >
              <FaGithub size={25} />
            </Link>
          </FadeInSection>
        </FadeInSection>
      </div>
      {/* skills */}
      <div className="w-full flex flex-col items-center justify-center bg-gray-950 py-24 pt-40 lg:px-20 px-5">
        <FadeInSection className=" flex flex-col items-center gap-2 ">
          <p className="text-gray-50 lg:text-4xl text-xl font-bold">
            My Skills
          </p>
          <p className="lg:text-xl text-gray-400">Knowledge and skills</p>
        </FadeInSection>
        <div className="w-full flex items-center justify-center lg:flex-row flex-col gap-8 mt-8">
          {/* mobile */}
          <FadeInSection
            className={
              "p-5 w-full lg:w-auto h-full hover:-translate-y-3 hover:shadow-md hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-lg bg-gray-800 flex flex-col items-start  border border-gray-600"
            }
          >
            <span className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500 to-purple-200">
              <FaMobile size={25} />
            </span>
            <p className="text-xl text-gray-100 font-bold mt-3">
              Mobile Development
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <SiReact color="#38BDF9" size={20} />
                <p className="text-sm text-gray-100">React Native</p>
              </span>
            </div>
          </FadeInSection>
          {/* frontend */}
          <FadeInSection
            className={
              "p-5 w-full lg:w-auto hover:-translate-y-3 hover:shadow-md hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-lg bg-gray-800 flex flex-col items-start  border border-gray-600"
            }
          >
            <span className="p-2.5 rounded-lg bg-gradient-to-br from-green-500 to-green-200">
              <FaCode size={25} />
            </span>
            <p className="text-xl text-gray-100 font-bold mt-3">
              Frontend Development
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <FaHtml5 color="orange" size={20} />
                <p className="text-sm text-gray-100">HTML</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <FaCss3 color="blue" size={20} />
                <p className="text-sm text-gray-100">CSS</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <FaJs color="Yellow" size={20} />
                <p className="text-sm text-gray-100">Javascript</p>
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    fill="#38BDF8"
                    d="M24 9C17 9 13 12.5 12 19C14 15.5 16.5 14 19.5 14C23.5 14 25.5 16.5 27 18.5C28.8 20.9 30.5 23 34.5 23C41.5 23 45.5 19.5 46.5 13C44.5 16.5 42 18 39 18C35 18 33 15.5 31.5 13.5C29.7 11.1 28 9 24 9ZM12 25C5 25 1 28.5 0 35C2 31.5 4.5 30 7.5 30C11.5 30 13.5 32.5 15 34.5C16.8 36.9 18.5 39 22.5 39C29.5 39 33.5 35.5 34.5 29C32.5 32.5 30 34 27 34C23 34 21 31.5 19.5 29.5C17.7 27.1 16 25 12 25Z"
                  />
                </svg>
                <p className="text-sm text-gray-100">Tailwindcss</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <FaReact color="#38BDF8" size={20} />
                <p className="text-sm text-gray-100">Reactjs</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <SiNextdotjs color="white" size={20} />
                <p className="text-sm text-gray-100">Nextjs</p>
              </span>
            </div>
          </FadeInSection>
          {/* backend */}
          <FadeInSection
            className={
              "p-5 w-full lg:w-auto hover:-translate-y-3 hover:shadow-md hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-lg bg-gray-800 flex flex-col items-start  border border-gray-600"
            }
          >
            <span className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-200">
              <FaNetworkWired size={25} />
            </span>
            <p className="text-xl text-gray-100 font-bold mt-3">
              Backend Development
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <FaNodeJs color="green" size={20} />
                <p className="text-sm text-gray-100">NodeJS</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <SiExpress color="white" size={20} />
                <p className="text-sm text-gray-100">ExpressJs</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <img
                  src="https://elysiajs.com/assets/elysia.svg"
                  width={25}
                  height={25}
                  alt=""
                />
                <p className="text-sm text-gray-100">Elysia</p>
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <img
                  src="https://bun.sh/logo.svg"
                  width={25}
                  height={25}
                  alt=""
                />
                <p className="text-sm text-gray-100">Bun</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <SiPrisma color="green" size={20} />
                <p className="text-sm text-gray-100">Prisma ORM</p>
              </span>
            </div>
          </FadeInSection>
          {/* db */}
          <FadeInSection
            className={
              "p-5 w-full lg:w-auto h-full hover:-translate-y-3 hover:shadow-md hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-lg bg-gray-800 flex flex-col items-start  border border-gray-600"
            }
          >
            <span className="p-2.5 rounded-lg bg-gradient-to-br from-green-500 to-green-200">
              <FaDatabase size={25} />
            </span>
            <p className="text-xl text-gray-100 font-bold mt-3">
              Database Management
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <SiPostgresql color="#38BDF9" size={20} />
                <p className="text-sm text-gray-100">PostgeSQL</p>
              </span>
              <span className="w-fit p-2 rounded-lg bg-gray-900 border border-gray-600 flex items-center gap-2">
                <SiMongodb color="green" size={20} />
                <p className="text-sm text-gray-100">MongoDB</p>
              </span>
            </div>
          </FadeInSection>
        </div>
      </div>
      <div className="w-full py-24 px-8 lg:px-24 flex flex-col items-center justify-center h-2/3 bg-black">
        <FadeInSection className="p-5 py-14 border border-gray-700 shadow-md shadow-gray-800 w-full lg:w-2/3 flex flex-col gap-1.5 items-center rounded-xl bg-gradient-to-r from-gray-950 to-blue-950">
          <p className="text-xl w-3/4 lg:text-3xl font-bold text-gray-200">
            “I’m constantly learning, growing, and exploring new possibilities.
            <br />
            Thank you for taking the time to visit my portfolio, I truly
            appreciate it!”
          </p>
          <Link
            href={"/contact"}
            className="mt-8 p-3 hover:scale-105 hover:bg-gray-800 rounded-lg flex items-center gap-2.5 shadow-sm border border-gray-600 text-gray-50 "
          >
            <p>Get In Touch</p>
            <FaArrowRight size={20} />
          </Link>
        </FadeInSection>
      </div>
    </div>
  );
};
export default Home;
