"use client";
import { useState } from "react";

import { dawnning_of_a_new_day } from "../app/fonts";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-6xl mx-auto bg-white w-full h-12 drop-shadow-md px-3">
      <div className="flex justify-between items-center h-full">
        <Link
          href="/"
          className={`${dawnning_of_a_new_day.className} text-wildflowergreen text-3xl`}
        >
          Sherrisa Classon
        </Link>
        <div>
          <ul className="hidden md:flex gap-10 text-xl">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/instructional_design">
              <li>Instructional Design</li>
            </Link>
            <Link href="/app_development">
              <li>App Development</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <GiHamburgerMenu size={"1.5rem"} color="#000" />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm-hidden h-screen bg-wildflowergreen p-6 ease-in duration-500"
            : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <FaTimesCircle size={"1.5rem"} color="#fff" />
          </div>
        </div>
        <div>
          <ul className="text-white">
            <Link href="/">
              <li onClick={() => setMenuOpen(false)} className="py-2">
                Home
              </li>
            </Link>
            <Link href="/instructional_design">
              <li onClick={() => setMenuOpen(false)} className="py-2">
                Instructional Design
              </li>
            </Link>
            <Link href="/app_development">
              <li onClick={() => setMenuOpen(false)} className="py-2">
                App Development
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
