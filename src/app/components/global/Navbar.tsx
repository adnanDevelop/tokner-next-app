"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [showSidebar, setOpenShideBar] = useState(false);

  const openSideBar = () => {
    setOpenHamburger(!openHamburger);
    setOpenShideBar(!showSidebar);
  };

  return (
    <nav className="w-full relative">
      {/* Large screen navbar */}
      <div className="lg:block hidden">
        <div className="w-full px-[40px] py-[30px] flex items-center justify-between fixed top-0 left-0 z-[10]">
          {/* Logo */}
          <div>
            <Image
              src={"/image/logo.svg"}
              width={200}
              height={150}
              alt="website logo "
            />
          </div>
          <div className="flex items-center gap-x-7 text-white font-medium capitalize">
            <Link href="#" className="transitions hover:text-success ">
              Our team
            </Link>
            <Link href="#" className="transitions hover:text-success ">
              Tokens
            </Link>
            <Link href="#" className="transitions hover:text-success ">
              Connect Wallet
            </Link>
            <Link href="#" className="transitions hover:text-success ">
              Lightpaper
            </Link>
          </div>
          <div className="flex items-center justify-center w-[250px] gap-x-7">
            <Link href="#" className="text-nowrap text-white font-medium">
              Sign In
            </Link>
            <button className="btn-outline-success">Sign Up</button>
          </div>
        </div>
      </div>

      {/* Small screen navbar */}
      <div className="lg:hidden block  relative">
        <div className="w-full flex items-center justify-between fixed top-0 left-0 z-[10] p-[25px]  ">
          {/* Logo */}
          <div>
            <Image
              src={"/image/logo.svg"}
              width={150}
              height={150}
              alt="website logo "
            />
          </div>

          {/* Sidebar */}
          <div
            className={`${
              showSidebar ? "left-0" : "left-[-100%]"
            }  w-[280px] fixed h-full bg-dark text-white z-[1] top-0  transitions delay-100 `}
          >
            {/* Sidebar Header
             */}
            <div className="flex items-center justify-between menu_header py-[15px] px-[10px]">
              <div className="logo">
                <Link href="/">
                  <img
                    src="/image/logo.svg"
                    alt=""
                    className="inline-block w-[140px] h-auto object-cover"
                    onClick={() => {
                      setOpenHamburger(false);
                    }}
                    loading="lazy"
                  />
                </Link>
              </div>
              <button
                className="close_btn text-[12px] text-white p-2 border  border-white rounded-md transition duration-300 focus:border-success focus:text-success "
                onClick={() => {
                  setOpenShideBar(false);
                  setOpenHamburger(false);
                }}
              >
                <GrClose />
              </button>
            </div>

            {/* Sidebar Link */}
            <div className="flex px-[10px] items-center flex-col gap-6 mt-[50px] text-2xl capitalize text-white font-normal ">
              <Link
                href="#"
                className="transitions hover:text-success"
                onClick={() => {
                  setOpenShideBar(false);
                  setOpenHamburger(false);
                }}
              >
                Our team
              </Link>
              <Link
                href="#"
                className="transitions hover:text-success"
                onClick={() => {
                  setOpenShideBar(false);
                  setOpenHamburger(false);
                }}
              >
                Tokens
              </Link>
              <Link
                href="#"
                className="transitions hover:text-success"
                onClick={() => {
                  setOpenShideBar(false);
                  setOpenHamburger(false);
                }}
              >
                Connect Wallet
              </Link>
              <Link
                href="#"
                className="transitions hover:text-success"
                onClick={() => {
                  setOpenShideBar(false);
                  setOpenHamburger(false);
                }}
              >
                Lightpaper
              </Link>
            </div>
          </div>

          {/* Animated hamburger */}
          <div className="lg:hidden">
            <button
              type="button"
              className="hamburger flex flex-col md:gap-y-[7px] gap-y-[6px]"
              onClick={openSideBar}
            >
              <span
                className={`md:w-[30px] w-[25px] h-[1.5px]  bg-white rounded-full transform transition duration-500 ease-in-out ${
                  openHamburger
                    ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.5rem]"
                    : ""
                }`}
              ></span>
              <span
                className={`md:w-[30px] w-[25px] h-[1.5px]  bg-white rounded-full transform transition duration-500 ease-in-out ${
                  openHamburger ? " opacity-0" : ""
                }`}
              ></span>
              <span
                className={`md:w-[30px] w-[25px] h-[1.5px]  bg-white rounded-full transform transition duration-500 ease-in-out ${
                  openHamburger
                    ? " -rotate-45 md:translate-y-[-.5rem] translate-y-[-.45rem]"
                    : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
