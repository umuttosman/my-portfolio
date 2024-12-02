// @ts-nocheck
import profile from "../../assets/my-photo.png";
import Image from "../../node_modules/next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={profile}
        alt="Picture of me"
        width={500}
        height={500}
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Umut <span>Osmanoğlu</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        FrontEnd Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/images/umut-osmanoglu-inveon-cv.pdf"
        download="Umut Osmanoglu - Resume.pdf"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* Social Links*/}
      <div className="flex justify-around w-3/4 mx-auto my-5 text-green-default md:w-full">
        <a
          href="https://github.com/umuttosman"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/umut-osmano%C4%9Flu"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="w-8 h-8" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center gap-x-2">
          <GoLocation />
          <span>Levent, İstanbul</span>
        </div>
        <p className="my-2">umuttosmanoglu@gmail.com</p>
        <p className="my-2">+(90) 551 231 15 05</p>
      </div>

      {/* Email */}
      <button
        onClick={() => window.open("mailto:umuttosmanoglu@gmail.com")}
        className="w-2/3 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green-default to-blue-400 focus:outline-none"
      >
        Email Me
      </button>
      <button
        onClick={changeTheme }
        className="w-2/3 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green-default to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
