"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { MEDIA_BLOG } from "@/constants/media-blog";

export const InterestFacts = () => {
  const t = useTranslations();
  return (
    <section className="px-[20px] lg:px-[120px] pb-[100px] lg:pb-[150px]">
      <h3 className="title-text mb-4 lg:mb-6">{t("interestingFacts")}</h3>
      <Swiper
        modules={[Navigation, Autoplay]}
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
      >
        {MEDIA_BLOG.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div
                className={`
                             flex items-center lg:h-[320px] justify-center w-full 
                             transition-all duration-300
                           
                           `}
              >
                <Image
                  src={slide.url}
                  alt={slide.url || "image"}
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
