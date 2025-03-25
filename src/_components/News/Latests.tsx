import { BlogCard } from "@/ui/BlogCard";
import { BLOG_DATA } from "@/constants/blog";
import { useTranslations } from "next-intl";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoCalendarClearOutline } from "react-icons/io5";



export const LatestsNews = () => {
    const t = useTranslations()



  return (
    <section className="mt-[30px] lg:mt-[70px]">
        <div className="flex flex-row items-center justify-between">
            <p className="title-text">{t("latestNews")}</p>
            <div className="flex flex-row items-center gap-5">
              <button className="h-10 gap-2 cursor-pointer  rounded-[4px] border border-[#BDC7CE] p-2.5 flex flex-row items-center">
                <BiSolidCategoryAlt/>
                <p className="text-[14px]">{t('chooseCategory')}</p>
              </button>
              <button className="h-10 gap-2 cursor-pointer rounded-[4px] border border-[#BDC7CE] p-2.5  flex flex-row items-center">
                <IoCalendarClearOutline/>
                <p className="text-[14px]">{t("chooseDate")}</p>
              </button>
            </div>
        </div>
        <div className="grid mt-5 lg:mt-6 grid-cols-1 gap-[25px] lg:grid-cols-3 lg:gap-[40px]">
        {BLOG_DATA.map((blog, index) => (
        <BlogCard read={true} key={blog.slug + index} blog={blog} />
      ))}
        </div>
     
    </section>
  );
};
