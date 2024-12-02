//@ts-nocheck
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, ISkill, Service } from "./type";

export const services: Service[] = [
  {
    title: "Modern Web Development",
    about:
      "I build responsive, user-friendly web applications using modern technologies like JavaScript, jQuery, React, Next.js, Nuxt.js",
      Icon: FaServer,
  },
  {
    title: "Clean and Scalable Code",
    about: "I prioritize writing clean, maintainable, and scalable code, ensuring long-term performance and ease of collaboration.",
    Icon: FaServer,
  },
  {
    title: "UI/UX Excellence",
    about: "I bring designs to life with an eye for detail, balancing aesthetics and functionality to create seamless user experiences.",
    Icon: AiOutlineApi,
  },
  {
    title: "Collaboration & Communication",
    about:
      "My strong communication skills and collaborative mindset enable effective teamwork and successful project delivery.",
    Icon: AiOutlineApi,
  },
  {
    title: "Passion for Learning",
    about: "I continuously learn and improve, staying updated with the latest trends in web development to deliver innovative solutions.",
    Icon: AiOutlineAntDesign,
  },
  {
    title: "Fast Adaptability",
    about: "I quickly adapt to emerging tools and technologies, integrating modern practices to stay ahead in frontend development.",
    Icon: MdDeveloperMode,
  },
];

export const languages: ISkill[] = [
  {
    name: "Jquery",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Javascript",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "ReactJS",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Typescript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "NextJs",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Tailwind",
    level: "90%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Figma",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "AdobeXD",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "Git & GitHub",
    level: "90%",
    Icon: BsCircleFill,
  },
];