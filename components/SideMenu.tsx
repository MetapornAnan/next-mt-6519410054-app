"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaUser,
  FaBook,
} from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { SiWheniwork } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { GrContact } from "react-icons/gr";

const menus = [
  { icon: <GrHomeRounded />, path: "/" },
  { icon: <FaUser />, path: "/aboutme" },
  { icon: <FaBook />, path: "/eduexp" },
  { icon: <SiWheniwork />, path: "/spec" },
  { icon: <MdWorkOutline />, path: "/projects" },
  { icon: <AiOutlineCode />, path: "/skills" },
  { icon: <GrContact />, path: "/contactme" },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <div className="fixed right-[60px] top-1/2 -translate-y-1/2 border border-[#7D7373] rounded-full px-5 py-9 flex flex-col gap-7">
      {menus.map((menu, i) => (
        <Link
          key={i}
          href={menu.path}
          className={`text-[26px] transition ${
            pathname === menu.path
              ? "text-[#FF5C00]"
              : "text-[#9a9a9f] hover:text-[#ff5100]"
          }`}
        >
          {menu.icon}
        </Link>
      ))}
    </div>
  );
}