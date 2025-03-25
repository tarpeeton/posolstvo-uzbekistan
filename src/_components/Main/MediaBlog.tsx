"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MEDIA_BLOG } from "@/constants/media-blog";

export const MediaBlog = () => {
  const t = useTranslations();

  return (
    <section className="mt-[60px] md:mt-[100px] px-[20px] lg:px-[120px]">
      <p className="title-text pb-4 md:pb-6">{t("mediaBlock")}</p>
      <div
        className="
          grid
          grid-cols-1
          gap-[30px]
          w-full
          md:grid-cols-2
          md:grid-rows-[repeat(4,190px)]
          md:h-[600px]
        "
      >
        {MEDIA_BLOG.map((img, index) => {
          const isFirst = index === 0;
          let classes =
            "relative w-full h-[200px] bg-gray-200 col-span-1 row-span-1";
          if (isFirst) {
            classes += " md:row-span-4 md:h-[640px]";
          }

          return (
            <div key={index} className={classes}>
              <Image
                alt={`Media ${index}`}
                quality={100}
                fill
                className="object-cover w-full h-full"
                src={img.url}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
