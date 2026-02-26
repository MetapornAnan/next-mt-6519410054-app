"use client";

import { FaReact, FaFigma, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiHtml5, SiNextdotjs } from "react-icons/si";

const skills = [
  {
    name: "React",
    percent: "90%",
    icon: <FaReact className="text-[#61DBFB]" />,
  },
  {
    name: "Figma",
    percent: "85%",
    icon: <FaFigma className="text-white" />,
  },
  {
    name: "HTML/CSS",
    percent: "80%",
    icon: <SiHtml5 className="text-white" />,
  },
  {
    name: "Next.js",
    percent: "80%",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "Java Script",
    percent: "80%",
    icon: <FaNodeJs className="text-white" />,
  },
  {
    name: "GitHub",
    percent: "90%",
    icon: <FaGithub className="text-white" />,
  },
];

export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">
        My <span className="text-[#FF5C00]">Skills</span>
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="text-center">
            <div
              className="w-38 h-55 mx-auto rounded-full 
              border border-white/20 
              flex flex-col items-center justify-center 
              bg-[#1a1a1a] 
              hover:border-orange-500 transition duration-300"
            >
              <div className="text-6xl mb-1">{skill.icon}</div>
              <div className="text-orange-500 text-xl font-semibold mt-3">
                {skill.percent}
              </div>
            </div>

            <p className="text-xl text-gray-400 mt-3">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}