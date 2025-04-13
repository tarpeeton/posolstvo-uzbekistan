"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { sliceText } from "@/utils/sliceText";
import { Link } from "@/i18n/routing";
import { IPost } from "@/types/posts";
import dayjs from 'dayjs'

import { FaRegCalendarAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";

type TBlogCardProps = {
  blog: IPost;
  read?: boolean;
};

export const BlogCard = ({ blog, read }: TBlogCardProps) => {
  const t = useTranslations();

 const formattedDate = dayjs(blog?.created_at).format('YYYY.MM.DD');



  return (
    <Link
      className="rounded-[4px] h-[550px] relative lg:h-[550px] border border-[#7676823D] flex flex-col"
      href={`/news/${blog.slug}`}
    >
      <Image
     src={blog?.img ? (blog.img.startsWith('http') ? blog.img : `/${blog.img}`) : 'image'}
        alt={blog.title}
        quality={100}
        width={1000}
        height={1000}
        className="object-cover h-[250px]"
      />
      <div className="flex flex-col gap-3  py-5 px-6">
        <p className="text-[18px] font-medium text-[#0E0F18]">
         {blog?.title ? sliceText(blog.title, 100) : ""}
        </p>
        <p className="text-[15px] text-[#232328]">
      {blog?.description ? sliceText(blog.description, 120) : ""}
        </p>
      </div>
      <div
        className={` absolute  ${
          read ? "bottom-[48px]" : "bottom-[20px]"
        } left-[24px] flex flex-row items-center gap-4`}
      >
        <div className="flex text-[#3F425F] flex-row items-center gap-2">
          <FaRegCalendarAlt />
          <p>{formattedDate}</p>
        </div>
        <div className="flex text-[#3F425F] flex-row items-center gap-2">
          <GrView />
          <p>{blog?.views_count === null ? 0 : blog?.views_count}</p>
        </div>
      </div>
      {read && (
        <p className="text-[#006FFF] hover:no-underline underline left-[25px] text-[16px] font-medium absolute bottom-[20px]">
          {t("readMore")}
        </p>
      )}
    </Link>
  );
};
