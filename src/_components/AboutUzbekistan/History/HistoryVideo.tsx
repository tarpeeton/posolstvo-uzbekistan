"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "use-intl";
import ReactPlayer from "react-player";
import { IoIosPlay } from "react-icons/io";





export const HistoryVideo = () => {
    const t = useTranslations("");
      const [isClient, setIsClient] = useState(false);
    
      const videoUrl = "https://youtu.be/0ZlLoAbFZ64?feature=shared"; 
      const posterUrl = "https://ucarecdn.com/6682da47-2dc7-42a5-a13e-f64532e741d5/-/preview/820x615/"; // O'zingizga mos poster URL'si
    
      useEffect(() => {
        setIsClient(true);
      }, []);
    



    return (
         <section className="px-[20px] lg:px-[120px] pb-[60px] lg:pb-[160px]">
              <p className="title-text mb-4 lg:mb-6">{t("culturalHeritage")}</p>
              <div className="lg:h-[620px] rounded-[4px] overflow-hidden w-full">
                {isClient && (
                  <ReactPlayer
                    url={videoUrl}
                    controls={true}
                    width="100%"
                    height="100%"
                    light={posterUrl}
                    playIcon={
                      <div className="inset-0  animate-pulse  flex items-center justify-center bg-opacity-50 cursor-pointer h-[420px] lg:h-[500px]">
                        <div className="rounded-full  cursor-pointer w-[90px] h-[90px] flex items-center justify-center border-2 border-[#2a2828]">
                          <button className="rounded-full  w-[65px] h-[65px] flex items-center justify-center">
                            <IoIosPlay className="text-[#2a2828]" size={50} />
                          </button>
                        </div>
                      </div>
                    }
                    pip={true}
                  />
                )}
              </div>
            </section>
    )
}