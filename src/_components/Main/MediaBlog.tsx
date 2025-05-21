"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";

interface IMediaBlogProps {
  links: string[];
}

export const MediaBlog = ({ links }: IMediaBlogProps) => {
  const t = useTranslations();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="mt-[60px] md:mt-[100px]">
      <p className="title-text pb-4 md:pb-6">{t("mediaBlock")}</p>
      <div className="flex flex-col lg:flex-row justify-between">
        <div
          className={`w-full overflow-hidden ${
            links[1] ? "lg:w-[49%]" : "lg:w-full"
          }`}
        >
          {links[0] && links[0] !== "" ? (
            <ReactPlayer
              className="!h-[350px] mb-[20px] lg:mb-0 lg:!h-[700px] !w-full"
              playsInline
              controls
              url={links[0]} 
            />
          ) : (
            <p>No valid video link available.</p> 
          )}
        </div>

        <div
          className={`w-full lg:w-[49%] overflow-hidden ${
            links[1] ? "flex flex-col gap-[20px]" : "hidden"
          }`}
        >
          {links.slice(1).map((link, index) =>
            link && link !== "" ? (
              <ReactPlayer
                key={index}
                className="!h-[350px] lg:!h-[220px] !w-full"
                playsInline
              controls

                url={link} 
              />
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};
