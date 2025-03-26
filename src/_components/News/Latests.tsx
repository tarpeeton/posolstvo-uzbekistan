"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/ui/dialog";
import { Calendar } from "@/ui/calendar";
import { BlogCard } from "@/ui/BlogCard";
import { BLOG_DATA } from "@/constants/blog";
import { useLocale, useTranslations } from "next-intl";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Button } from "@/ui/button";
import { format } from "date-fns";
import { FaCheck } from "react-icons/fa6";
import { ACTIVE_FILTER_NEWS } from "@/constants/news-filter";

export const LatestsNews = () => {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState<string>("day");
  const locale = useLocale();
  const [date, setDate] = useState<Date | undefined>(new Date());

  const activateFilter = (key: string) => setActiveFilter(key);

  return (
    <section className="mt-[30px] lg:mt-[70px]">
      <div className="flex flex-row items-center justify-between">
        <p className="title-text">{t("latestNews")}</p>
        <div className="flex flex-row items-center gap-5">
          {/* BUTTON FOR CALENDAR */}
          <button className="h-10 gap-2 cursor-pointer  rounded-[4px] border border-[#BDC7CE] p-2.5 flex flex-row items-center">
            <BiSolidCategoryAlt />
            <p className="text-[14px]">{t("chooseCategory")}</p>
          </button>

          <Dialog>
            <DialogTrigger asChild>
              <button className="h-10 gap-2 cursor-pointer rounded-[4px] border border-[#BDC7CE] p-2.5 flex flex-row items-center">
                <IoCalendarClearOutline />
                <p className="text-[14px]">
                  {date ? format(date, "PPP") : t("chooseDate")}
                </p>
              </button>
            </DialogTrigger>

            <DialogContent className=" w-[340px]  p-4  md:w-[420px] overflow-hidden">
              <DialogHeader>
                <DialogTitle>{t("chooseDate")}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-row items-center gap-1.5">
                {ACTIVE_FILTER_NEWS.map((item, index) => (
                  <button
                    onClick={() => activateFilter(item.key)}
                    key={item.key + index}
                    className={`flex ${
                      activeFilter === item.key
                        ? "bg-[#006EFF]"
                        : "bg-[#F6F6F6]"
                    } cursor-pointer py-2 px-1.5 rounded-[4px] border border-[#D9D9D9] flex-row items-center gap-1`}
                  >
                    <div
                      className={`w-[15px] md:w-[24px] md:h-[24px] ${
                        activeFilter === item.key
                          ? "bg-[#004093]"
                          : "bg-[#D9D9D9]"
                      } rounded-full text-white  h-[15px] flex items-center justify-center`}
                    >
                      <FaCheck />
                    </div>
                    <p
                      className={`text-[13px] lg:text-[15px]  ${
                        activeFilter === item.key
                          ? "text-white"
                          : "text-[#000D2F]"
                      }`}
                    >
                      {item.name[locale]}
                    </p>
                  </button>
                ))}
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-none bg-inherit   mx-auto"
              />

              <DialogFooter className="w-full">
                <Button className="w-full h-[50px] bg-[#006FFF] rounded-[4px] text-white font-medium">
                  {t("apply")}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
