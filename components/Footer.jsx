import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp} from'react-icons/bs'

function Footer() {
  return (
    <footer className="bg-green-600 min-h-[450px] md:min-h-[250px] items-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-5 py-16 md:py-8">
          <div className="flex gap-1 items-center text-xl md:text-2xl lg:text-3xl font-bold text-white">
            <h1>Lionstone</h1>
            <FaHome />
          </div>

          <div className="text-gray-800">
            <ul className="flex flex-col gap-8 md:flex-row md:pt-16 text-center font-semibold">
              <Link className=" hover:text-white" href="/">Home</Link>
              <Link className=" hover:text-white" href="#product">Products</Link>
              <Link className=" hover:text-white" href="#contact">Contact</Link>
              <Link className=" hover:text-white" href="#category">Category</Link>
            </ul>
          </div>
          <div className="flex gap-x-5 items-center md:pt-16 pr-8 ">
           
            <Link href='https://www.facebook.com/' target="_blank">
                <BsFacebook size={30} className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"/>
            </Link>
            <Link href='https://www.instagram.com/' target="_blank">
                <BsInstagram size={30} className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"/>
            </Link>
            <Link href='https://www.whatsapp.com/' target="_blank">
                <BsWhatsapp size={30} className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"/>
            </Link>
            <Link href='https://www.linkedin.com/' target="_blank">
                <BsLinkedin size={30} className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"/>
            </Link>
            <Link href='https://www.twitter.com/' target="_blank">
                <BsTwitter size={30} className="text-gray-700 hover:text-white hover:-translate-y-1.5 duration-300"/>
            </Link>
            
        </div>
        </div>
        <p className="text-white text-center text-sm pb-3 md:12">Designed by Tom Williams</p>
      </div>
    </footer>
  );
}

export default Footer;
