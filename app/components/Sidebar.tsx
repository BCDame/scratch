"use client"
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


const Sidebar = () => {

    const pathname = usePathname();
    const [open, setOpen] = useState(true);

  const menu = [
    { label: "Home", Icon: <BsHouseDoorFill />  , link:'/'} ,
    { label: "Reports", Icon: <BsReverseLayoutTextSidebarReverse />  , link:'/reports' },
    { label: "Settings", Icon: <BsFillGearFill />  , link:'/settings' },
    { label: "About", Icon: <BsPower />  , link:'/about' },
  ];
  return (
    <div className={`sidebar ${open ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "«" : "»"}
      </button>
      <h1 className="myLogo">MY LOGO</h1>
      <ul>
        {menu.map((item, i): any => (
          <li key={i}>
            <Link href={item.link} className={`menu-link ${pathname === item.link ? `active` : ''}`}>
            <span className="icon">{item.Icon}</span> 
            {open &&
            <span className="label">{item.label}</span>
            }
            
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
