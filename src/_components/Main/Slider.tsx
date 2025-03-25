"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MEDIA_BLOG } from "@/constants/media-blog";
import Image from "next/image";


export const EmbassySwiper: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full  h-[400px]  md:h-[500px] mt-15 lg:mt-[200px] ">
      <Swiper
        modules={[Navigation , Autoplay]}
        slidesPerView={1.3}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        centeredSlides
        loop
        navigation
        spaceBetween={40}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {MEDIA_BLOG.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center">
              <div
                className={`
                  flex items-center justify-center w-full 
                  transition-all duration-300
                  ${
                    isActive
                      ? "h-[320px] scale-105"
                      : " h-[250px] scale-100 mt-[48px]"
                  }
                `}
              >
                <Image  src={slide.url} alt="image" width={1000} height={1000} quality={100} className="w-full h-full object-cover"/>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
