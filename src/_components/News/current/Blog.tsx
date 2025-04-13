"use client";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Breadcrumb } from "@/ui/breadcrumb";
import { IPost } from "@/types/posts";
import dayjs from "dayjs";

interface IBlogCurrentProps {
  BLOG_DATA: IPost;
}

export const Blog = ({ BLOG_DATA }: IBlogCurrentProps) => {

  const formattedDate = dayjs(BLOG_DATA?.created_at).format("YYYY.MM.DD");

  return (
    <section>
      <div className="mt-6">
        <Breadcrumb
          items={[
            {
              label: {
                ru: "Главная",
                uz: "Bosh sahifa",
                en: "Home",
                ur: "ہوم",
              },
              href: "/",
            },
            {
              label: {
                ru: "Новости",
                uz: "Yangiliklar",
                en: "News",
                ur: "خبریں",
              },
              href: "/news",
            },
            {
              label: BLOG_DATA
                ? {
                    ru: BLOG_DATA?.title,
                    uz: BLOG_DATA?.title,
                    en: BLOG_DATA?.title,
                    ur: BLOG_DATA?.title,
                  }
                : {
                    ru: "Загрузка...",
                    uz: "Yuklanmoqda...",
                    en: "Loading...",
                    ur: "لوڈ ہو رہا ہے...",
                  },
              isCurrent: true,
            },
          ]}
        />
      </div>

      <div className="pt-[60px] pb-[100px] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-4 lg:w-[60%] ">
          <p className="title-text text-[#0E0F18]">{BLOG_DATA?.title || ""}</p>
          <p className="text-[16px] text-[#0E0F18]">
            {BLOG_DATA?.description || ""}
          </p>
          <div className="flex text-[#3F425F] flex-row items-center gap-2">
            <FaRegCalendarAlt />
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          {BLOG_DATA?.img && (
            <Image
              width={1540}
              height={1000}
              quality={100}
              src={BLOG_DATA?.img}
              alt={BLOG_DATA?.title}
              className="w-full h-[300px] lg:h-[600px] object-cover"
            />
          )}
        </div>
        <div>
          <div className="text-[16px] text-[#0E0F18]">
            <div
              className="lg:text-[15px] "
              dangerouslySetInnerHTML={{ __html: BLOG_DATA?.content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
