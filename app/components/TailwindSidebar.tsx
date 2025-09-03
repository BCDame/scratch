"use client";
import {
  BsHouseDoorFill,
  BsReverseLayoutTextSidebarReverse,
  BsFillGearFill,
  BsPower,
} from "react-icons/bs";
import "@/app/styles/layout/sidebar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const TailwindSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const menu = [
    { label: "Home", Icon: <BsHouseDoorFill />, link: "/" },
    {
      label: "Reports",
      Icon: <BsReverseLayoutTextSidebarReverse />,
      link: "/reports",
    },
    { label: "Settings", Icon: <BsFillGearFill />, link: "/settings" },
    { label: "About", Icon: <BsPower />, link: "/about" },
  ];
  return (
    <div
      className={`flex flex-col relative bg-[#fff] h-screen px-2  ${
        open ? "open w-55" : "closed w-16"
      }`}
    >
      <button className={`absolute rounded-4xl bg-[#333] p-1 w-10 h-10 -right-5 text-[#fff] ${open ? "top-15" : 'top-15'} `} onClick={() => setOpen(!open)}>
        {open ? "«" : "»"}
      </button>
      <h1 className="mb-5 text-center font-bold mt-5">MY LOGO</h1>
      <ul>
        {menu.map((item, i): any => (
          <li key={i} className="hover:bg-[#e7e7e7] ">
            <Link
              href={item.link}
              className={`flex gap-4 px-5 py-4 ${
                pathname === item.link ? `active` : ""
              }`}
            >
              <span className="text-xl">{item.Icon}</span>
              {open && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TailwindSidebar;
