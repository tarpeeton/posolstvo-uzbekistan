"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { TMultiLang } from "@/types/multiLang";
import { useLocale } from "next-intl";

interface SlideData {
  url: string;
  alt?: string;
  text: TMultiLang
}

interface EmbassySwiperProps {
  slides: SlideData[];
}

export const TourismSlider: FC<EmbassySwiperProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale()

  return (
    <section className="w-full h-[400px] md:h-[500px] ">
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
            slidesPerView: 2.4,
            spaceBetween: 40,
          },
        }}
        centeredSlides
        loop
        navigation
        spaceBetween={40}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide
              key={index}
              className="flex flex-col relative items-center justify-center"
            >
              <div
                className={`
                  flex items-center  relative rounded-[5px] justify-center w-full 
                  transition-all duration-300
                  ${isActive ? "h-[320px]  scale-105 rounded-[5px]" : "h-[250px] rounded-[5px] scale-100 mt-[48px]"}
                `}
              >
                <Image
                  src={slide.url}
                  alt={slide.alt || "image"}
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full h-full object-cover rounded-[5px]"
                />
                <div className="absolute w-full h-full bg-black  opacity-15" />
                <p className="text-[18px] z-50 lg:text-[21px] absolute bottom-[20px] left-[10px] text-white">
                  {slide.text[locale]}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
