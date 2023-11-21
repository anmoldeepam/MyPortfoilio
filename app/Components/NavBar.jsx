"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  return (
    <nav className="fixed px-4 top-0 left-0 right-0 z-10 bg-[#121212] opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <Link href={"/"} className="py-4 text-lg font-semibold md:text-2xl ">
          LOGO
        </Link>
        <div className="block mobile-menu md:hidden">{
          !navbarOpen ? (
            <button onClick={()=>setnavbarOpen(true)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white">
              <Bars3Icon className="w-5 h-5" />
              </button>
          ):(
            <button onClick={()=>setnavbarOpen(false)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white">
              <XMarkIcon className="w-5 h-5" />
              </button>

          )
        }</div>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> :null}
    </nav>
  );
};

export default NavBar;
