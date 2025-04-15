"use client";

import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

interface SlideData {
  title: string;
  image: string;
  slug: string;
}

interface EmbassySwiperProps {
  slides: SlideData[];
  typeROUTER: number
}

export const TourismSlider: FC<EmbassySwiperProps> = ({ slides , typeROUTER }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <Link
              href={typeROUTER  === 1 ? `tourism/landmarks/${slide.slug}` : `tourist-routers/${slide.slug}`}
                className={`
                  flex items-center  relative rounded-[5px] justify-center w-full 
                  transition-all duration-300
                  ${isActive ? "h-[320px]  scale-105 rounded-[5px]" : "h-[250px] rounded-[5px] scale-100 mt-[48px]"}
                `}
              >
                <Image
                  src={slide.image}
                  alt={slide.title || "image"}
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-full h-full object-cover rounded-[5px]"
                />
                <div className="absolute w-full h-full bg-black  opacity-15" />
                <p className="text-[18px] z-50 lg:text-[21px] absolute bottom-[20px] left-[10px] text-white">
                  {slide.title}
                </p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
