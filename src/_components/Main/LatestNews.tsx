"use client";
import { BLOG_DATA } from "@/constants/blog";
import { useTranslations } from "next-intl";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useState } from "react";
import { BlogCard } from "@/ui/BlogCard";

export const LatestNews = () => {
  const t = useTranslations();
  const [sliceNumber, setSliceNumber] = useState<number>(3);

  const showMore = () => {
    if (BLOG_DATA.length === sliceNumber) {
      return setSliceNumber(3);
    } else {
      return setSliceNumber((prev) => prev + 3);
    }
  };

  return (
    <section className="mt-[80px] md:mt-[100px] px-[20px] lg:px-[120px]">
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="title-text">{t("latestNews")}</p>
        {/* CARDS */}
        <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-3 lg:gap-[40px]">
          {BLOG_DATA.slice(0, sliceNumber).map((blog, index) => (
          <BlogCard  blog={blog}  key={blog.imageUrl + index} />
          ))}
        </div>

        {/* BUTTOON */}

        <button
          aria-label={
            BLOG_DATA.length === sliceNumber ? t("showLess") : t("showMore")
          }
          onClick={showMore}
          className="bg-[#427EFF] rounded-[4px] cursor-pointer h-12 flex flex-row items-center justify-center gap-2 hover:bg-[#4f42ff] w-full text-white"
        >
          <p>
            {BLOG_DATA.length === sliceNumber ? t("showLess") : t("showMore")}
          </p>
          <MdKeyboardArrowDown
            className={`md:text-[20px] ${
              BLOG_DATA.length === sliceNumber ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </section>
  );
};
