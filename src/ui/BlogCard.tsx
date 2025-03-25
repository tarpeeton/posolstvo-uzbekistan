import { TBlog } from "@/types/blog"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image";
import { sliceText } from "@/utils/sliceText";
import { Link } from "@/i18n/routing";

import { FaRegCalendarAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";


type TBlogCardProps = {
    blog: TBlog,
    read?: boolean
}


export const BlogCard = ({ blog  , read}: TBlogCardProps) => {
    const locale = useLocale()
    const t = useTranslations()


    return (
        <Link
        className="rounded-[4px] h-[550px] relative lg:h-[550px] border border-[#7676823D] flex flex-col"
        href={`/blog/${blog.slug}`}
      >
        <Image
          src={blog.imageUrl}
          alt={blog.title[locale]}
          quality={100}
          width={1000}
          height={1000}
          className="object-cover h-[250px]"
        />
        <div className="flex flex-col gap-3  py-5 px-6">
          <p className="text-[18px] font-medium text-[#0E0F18]">
            {sliceText(blog.title[locale], 100)}
          </p>
          <p className="text-[15px] text-[#232328]">
            {sliceText(blog.description[locale], 120)}
          </p>
        </div>
        <div className=" absolute bottom-[48px] left-[24px] flex flex-row items-center gap-4">
          <div className="flex text-[#3F425F] flex-row items-center gap-2">
            <FaRegCalendarAlt />
            <p>{blog.date}</p>
          </div>
          <div className="flex text-[#3F425F] flex-row items-center gap-2">
            <GrView />
            <p>{blog.viewsCount}</p>
          </div>
        </div>
        {read && (<p className="text-[#006FFF] hover:no-underline underline left-[25px] text-[16px] font-medium absolute bottom-[20px]">
          {t("readMore")}
        </p>)}
      </Link>
    )
}