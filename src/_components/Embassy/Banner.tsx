

"use client";

import {  useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import { sliceText } from "@/utils/sliceText";
import { useLocale } from "next-intl";
import { GrPrevious, GrNext } from "react-icons/gr";
import useSwiperNavigation from "@/utils/swiper";
import { Link } from "@/i18n/routing";
import { IBanner } from "@/types/banner";
import { Axios } from "@/utils/api";
import dayjs from "dayjs";




export const EmbassyBanner = () => {
  const locale = useLocale();
  const [banners, setBanner] = useState<IBanner[]>([]);

  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  const [activeIndex, setActiveIndex] = useState(0);

  function handleInit(swiper: any) {
    swiperRef.current = swiper;
  }

  function handleSlideChange(swiper: any) {
    setActiveIndex(swiper.activeIndex);
  }

  function goToSlide(index: number) {
    swiperRef.current.slideTo(index);
  }

useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await Axios.get(`/banner?page=news&lang=${locale}`);
        setBanner(res.data.data);
      } catch (error) {
        console.error("Failed to fetch media blog:", error);
      }
    };

    fetchBanner();
  }, [locale]);


  return (
    <section
      aria-label="News Carousel"
      className="w-full relative  py-5  px-[20px] lg:px-[120px] mx-auto"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative"
        modules={[Navigation]}
        onInit={handleInit}
        onSlideChange={handleSlideChange}
      >
        {banners.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link
              href={slide.url}
              aria-label={`Slide ${slide.id}`}
              className="flex flex-col-reverse items-start gap-4 
                         lg:flex-row lg:items-center mx-2 lg:mx-0"
            >
              <div className="flex-1 lg:pl-[60px] flex flex-col justify-center mt-4 lg:mt-0">
                <h2 className="text-xl lg:text-[32px] font-semibold text-gray-900 mb-2 lg:mb-4">
                  {sliceText(slide.title, 120)}
                </h2>
                <p className="text-sm lg:text-[20px] text-gray-600 mb-3 lg:mb-4">
                  {sliceText(slide.description, 100)}
                </p>
                <time className="text-xs items-center text-gray-500 flex flex-row gap-2 lg:text-[16px]">
                  {" "}
                  <LuCalendarDays />   {dayjs(slide.created_at).format("YYYY.MM.DD")}
                </time>
              </div>
              {/* PREV && NEXT BUTTON */}
              <div className="w-full md:w-[50%] flex justify-center items-center">
                <div className="w-full h-[250px] rounded-[4px] overflow-hidden  lg:h-[380px] bg-gray-300 flex items-center justify-center">
                  <Image
                    src={slide.image}
                    alt={slide.title + "image"}
                    width={400}
                    height={250}
                    quality={100}
                    className="object-cover w-full h-full rounded-[4px]"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute cursor-pointer z-50 left-[5px] md:left-[20px] lg:left-[40px] top-[150px]  md:top-1/2 -translate-y-1/2 
                    "
      >
        <GrPrevious className="lg:w-[40px] lg:h-[40px] text-[#454343] hover:text-black" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next slide "
        className="absolute cursor-pointer  right-[5px] md:right-[20px] top-[150px] lg:right-[40px] md:top-1/2 -translate-y-1/2 
                     z-50 "
      >
        <GrNext className="lg:w-[40px] lg:h-[40px] text-[#454343] hover:text-black" />
      </button>
      {/* CUSTOM PAGINATION  */}
      <div className="flex md:relative md:top-[10px] w-[90%] md:w-auto absolute z-50 space-x-1  top-[270px] gap-2 justify-center mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full cursor-pointer 
              ${activeIndex === index ? "bg-[#3F425F]" : "bg-gray-300"} 
              transition-all`}
          />
        ))}
      </div>
    </section>
  );
};
