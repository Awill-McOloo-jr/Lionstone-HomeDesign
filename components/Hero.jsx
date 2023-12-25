import React from "react";
import Button from "./Button";
import Link from 'next/link'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp} from'react-icons/bs'

function Hero() {
  return (
    <div className='bg-[url("/Living.jpeg")] h-screen bg-cover
     bg-no-repeat bg-center bg-fixed flex items-center relative'>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 z-10">
            <div className="text-center text-white flex flex-col gap-[20px] md:gap-[40px]">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider">Design your Dream</h1>
                    
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider"><span className="text-green-600">Home</span> Very Easily</h1>
                </div>
                <div className="mx-auto bg-green-600 h-[2px] w-[150px]" />
                <div>
                    <p className=" text-sm md:text-xl text-gray-300 tracking-widest">Simple Furniture and High-end Quality</p>
                </div>
                <div>
                    <Button link='#' text='Explore Products'/>
                </div>
            
            </div>
        </div>
        <div className="hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center">
            <div className="bg-green-600 w-[1.5px] h-[250px]"/>
            <Link href='https://www.facebook.com/' target="_blank">
                <BsFacebook size={30} className="text-green-600 hover:-translate-x-1.5 duration-300"/>
            </Link>
            <Link href='https://www.instagram.com/' target="_blank">
                <BsInstagram size={30} className="text-green-600 hover:-translate-x-1.5 duration-300"/>
            </Link>
            <Link href='https://www.whatsapp.com/' target="_blank">
                <BsWhatsapp size={30} className="text-green-600 hover:-translate-x-1.5 duration-300"/>
            </Link>
            <Link href='https://www.linkedin.com/' target="_blank">
                <BsLinkedin size={30} className="text-green-600 hover:-translate-x-1.5 duration-300"/>
            </Link>
            <Link href='https://www.twitter.com/' target="_blank">
                <BsTwitter size={30} className="text-green-600 hover:-translate-x-1.5 duration-300"/>
            </Link>
            
        </div>
        
     </div>
  );
}

export default Hero;
