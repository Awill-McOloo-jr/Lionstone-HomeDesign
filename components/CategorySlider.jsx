"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";


import "swiper/css";
import Living from "../public/Living.jpeg";
import Dining from "../public/kitchen.jpeg";
import Kitchen from "../public/kitchen1.jpg";
import Image from "next/image";
import Button from "./Button";

const categories = [
  { name: "Living",
    description: "Unwind in your sanctuary of serenity, where soft light dances on plush textures and warmth emanates from every corner. Invite nature in through  expansive windows, letting light and life mingle with laughter and conversation. This living room, your haven of comfort, awaits to weave stories of cozy evenings and joyous gatherings. ",
    image: Living, 
    btnText: "Explore"
 },
  { name: "Dining", 
    description: " Gather loved ones  around a sun-soaked table, where laughter ripples like laughter and aromas of joy rise with every shared bite. This dining haven, bathed in warmth and whispered conversations, invites you to savor moments like fine wine, each one a precious vintage to be cherished  ", 
    image: Dining, 
    btnText: "Explore" 
},
  { name: "Kitchen",
    description: "In this culinary domain, sparks fly from eager flames, and whispers of spices dance on the air. Unleash your inner chef amid gleaming steel and sun-drenched counters, where creativity simmers and laughter seasons every creation. This kitchen, your culinary canvas, awaits to paint stories of shared meals and joyful feasts.",
    image: Kitchen,
    btnText: "Explore" 
},
];

function CategorySlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
      }}
      className="categorySlider min-h-[660px]"
    >
      {categories.map((category, index) => (
        <SwiperSlide
          className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10"
          key={index}
        >
            <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-16">
                <Image
                src={category.image}
                height={200}
                width={600}
                alt="sliderImage"
                />

                <div className="flex flex-col gap-y-5">
                    <div className="text-2xl font-medium flex gap-x-2 items-center">
                        <h1>{category.name}</h1>
                        <div className="h-[3px] w-[40px] bg-green-600 rounded" />
                    </div>
                    <div className="text-[20px] text-gray-600 ">
                        <p>{category.description}</p>
                    </div>
                    <div>
                        <Button link="#" text={category.btnText} />
                    </div>
                </div>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategorySlider;
