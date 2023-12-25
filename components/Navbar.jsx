"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed bg-white top-0 w-[100%] z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-6">
        <div className="flex gap-1 items-center text-xl md:text-2xl font-bold">
          <h1>Lionstone</h1>
          <FaHome />
        </div>
        <div className="text-gray-500">
          <ul className="hidden md:flex gap-6">
            <Link href="/">Home</Link>
            <Link href="#product">Products</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#category">Category</Link>
          </ul>
        </div>
        <div>
          <button className="hidden md:block border border-gray-600 px-4 py-1 rounded-md hover:bg-gray-900 hover:text-white">
            Sign In
          </button>
        </div>
        {/**Mobile Menu */}
        <div className="md:hidden block">
          {toggle ? (
            <AiOutlineClose size={30} onClick={() => setToggle(!toggle)} />
          ) : (
            <AiOutlineMenu size={30} onClick={() => setToggle(!toggle)} />
          )}
        </div>
        <div
          className={` ease-in duration-300 md:hidden  mt-5 w-full h-screen fixed bg-black/70 text-white top-[60px] ${
            toggle ? `left-[0]` : `left-[-100%]`
          }`}
        >
          <ul className="flex flex-col">
            <Link href="/" className="p-5 hover:text-blue-500">
              Home
            </Link>
            <Link href="#product" className="p-5 hover:text-blue-500">
              Products
            </Link>
            <Link href="/contact" className="p-5 hover:text-blue-500">
              Contact
            </Link>
            <Link href="/about" className="p-5 hover:text-blue-500">
              About
            </Link>
          </ul>

          <div className="flex flex-col gap-5 items-center mt-48">
            <div className="bg-green-600 w-[250px] h-[1px]" />
            <div className="flex gap-5 mt-10 ">
              <Link href="https://www.facebook.com/" target="_blank">
                <BsFacebook
                  size={30}
                  className="text-green-600 hover:-translate-y-1.5 duration-300"
                />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <BsInstagram
                  size={30}
                  className="text-green-600 hover:-translate-y-1.5 duration-300"
                />
              </Link>
              <Link href="https://www.whatsapp.com/" target="_blank">
                <BsWhatsapp
                  size={30}
                  className="text-green-600 hover:-translate-y-1.5 duration-300"
                />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <BsLinkedin
                  size={30}
                  className="text-green-600 hover:-translate-y-1.5 duration-300"
                />
              </Link>
              <Link href="https://www.twitter.com/" target="_blank">
                <BsTwitter
                  size={30}
                  className="text-green-600 hover:-translate-y-1.5 duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
