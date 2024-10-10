"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [scrollY, setScrollY] = React.useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollY);

  let bool = false;
  if (scrollY > 0) {
    bool = true;
  }

  return (
    <>
      {/* <HeaderFixed bool={bool} /> */}
      <HeaderScroll bool={bool} scrollY={scrollY} />
    </>
  );
};

const HeaderFixed = ({ bool }: { bool: boolean }) => {
  return (
    <header
      className={`w-full bg-white relative z-[9] transition-all ${
        bool == true ? "h-[0vh]" : "h-[10vh]"
      } flex items-center justify-between px-8`}
    >
      <h1 className="text-4xl font-bold">FS</h1>
      <nav className="flex gap-12 capitalize">
        <Link href="#">home</Link>
        <Link href="#">Feature</Link>
        <Link href="#">About</Link>
        <Link href="#">Pricing</Link>
        <Link href="#">FAQ</Link>
      </nav>
      <div className="flex gap-4">
        <Button variant={"customNavbar"}>sign-in</Button>
      </div>
    </header>
  );
};

const HeaderScroll = ({
  bool,
  scrollY,
}: {
  bool: boolean;
  scrollY: number;
}) => {
  const [classNameNav, setClassNameNav] = React.useState(
    "left-0 w-1/6 bg-white"
  );

  useEffect(() => {
    if (scrollY > 600) {
      setClassNameNav("left-[9.25rem] w-1/6 bg-white");
    } else {
      setClassNameNav("left-0 w-1/6 bg-white");
    }
    if (scrollY > 1800) {
      setClassNameNav("left-[18.80rem] w-1/6 bg-white");
    }
    if (scrollY > 2500) {
      setClassNameNav("left-[28.10rem] w-1/6 bg-white");
    }

    if (scrollY > 3850) {
      setClassNameNav("w-[14%] left-[37rem] bg-white");
    }
  }, [scrollY]);

  console.log(scrollY);

  return (
    <header
      className={`${
        bool == true
          ? "h-[7vh] w-1/2 fixed mx-auto left-[22.25rem] top-4 z-[999]"
          : "h-[7vh] w-1/2 fixed mx-auto left-[22.25rem] -top-16 z-[999]"
      }  bg-bg2 transition-all rounded-full py-2 px-2`}
    >
      <div
        className={` ${classNameNav} h-full rounded-full relative z-[45] transition-all`}
      ></div>
      <div className="flex justify-between items-center relative bottom-8 z-[56] px-8 cursor-pointer capitalize ">
        <p onClick={() => setClassNameNav("left-0 w-1/6 bg-white")}>home</p>
        <p onClick={() => setClassNameNav("left-[9.25rem] w-1/6 bg-white")}>
          feature
        </p>
        <p onClick={() => setClassNameNav("left-[18.80rem] w-1/6 bg-white")}>
          about
        </p>
        <p onClick={() => setClassNameNav("left-[28.10rem] w-1/6 bg-white")}>
          pricing
        </p>
        <p onClick={() => setClassNameNav("w-[14%] left-[37rem] bg-white")}>
          FAQ
        </p>
      </div>
    </header>
  );
};
export default Navbar;
