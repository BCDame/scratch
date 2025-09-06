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

const TailwindSidebar = ({mobileOpen, setMobileOpen} :any) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  console.log(mobileOpen)

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
    <>
    {mobileOpen &&
  <div
    className="block md:hidden mobile-overlay fixed inset-0 z-40"
    onClick={() => setMobileOpen(!mobileOpen)}
  ></div>
}
   <div
  className={`
    fixed top-0 left-0 h-full z-50
    bg-[var(--theme-primary)] text-white px-2
    transform transition-transform duration-300
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
    ${open ? "w-56" : "w-16"} 
    md:relative md:translate-x-0
  `}
>
      <button className={`hidden md:block absolute rounded-4xl bg-[#333] p-1 w-10 h-10 -right-5 text-[#fff] ${open ? "top-15" : 'top-15'} `} onClick={() => setOpen(!open)}>
        {open ? "«" : "»"}
      </button>

       {/* Close button (mobile only) */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 md:hidden text-white"
        >
          ✕
        </button>
      <h1 className="mb-5 text-center font-bold mt-5">MY LOGO</h1>
      <ul>
        {menu.map((item, i): any => (
          <li key={i} className="hover:bg-[var(--theme-secondary)] ">
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
    </>
  );
};

export default TailwindSidebar;
