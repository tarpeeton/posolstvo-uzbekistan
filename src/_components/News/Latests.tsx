"use client";
import { useEffect, useState } from "react";
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
import { FaCheck } from "react-icons/fa6";
import { ACTIVE_FILTER_NEWS } from "@/constants/news-filter";
import { YearPicker } from "./YearPicker";
import { MonthPicker } from "./MonthPicker";
import { BLOG_CATEGORY } from "@/constants/blog";
import { formatSelectedDate } from "@/utils/formatSelectedDate";
import { Pagination  , PaginationContent , PaginationNext , PaginationPrevious } from "@/ui/pagination";
import { useRouter , useSearchParams } from "next/navigation";

type DateRange = { from: Date; to?: Date };
type DateOrRange = Date | DateRange | undefined;
type Mode = "single" | "range" | "month" | "year";

export const LatestsNews = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<string>("day");
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const [tempDate, setTempDate] = useState<DateOrRange>(new Date());
  const [selectedDate, setSelectedDate] = useState<DateOrRange>(new Date());
  const [mode, setMode] = useState<Mode>("single");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [categoryForFilter, setCategoryForFilter] = useState<string>("");
  const activateFilter = (key: string) => setActiveFilter(key);
  const [tempCategory, setTempCategory] = useState<string>(categoryId);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(BLOG_DATA.length / itemsPerPage);


  const currentBlogs = BLOG_DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );



  useEffect(() => {
    if (activeFilter === "week") {
      setMode("range");
    } else if (activeFilter === "day") {
      setMode("single");
    } else if (activeFilter === "year") {
      setMode("year");
    } else if (activeFilter === "month") {
      setMode("month");
    }
  }, [activeFilter]);

  const renderDate = (): string => {
    return formatSelectedDate(selectedDate, mode, locale, t);
  };

  const getCalendarMonth = (): Date | undefined => {
    if (!tempDate) return undefined;
    if (tempDate instanceof Date) return tempDate;
    return tempDate.from;
  };

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
    setMode("month");
  };

  const handleSelectMonth = (monthIndex: number) => {
    const yearToUse =
      selectedYear !== null ? selectedYear : new Date().getFullYear();
    const newDate = new Date(yearToUse, monthIndex, 1);
    setTempDate(newDate);
    setMode("single");
  };

  const handleApply = () => {
    setSelectedDate(tempDate);
  };

  const handleCategoryApply = () => {
    setCategoryForFilter(tempCategory);
  };
  return (
    <section className="mt-[30px] lg:mt-[70px]">
      <div className="flex flex-col gap-[20px]  md:flex-row md:items-center md:justify-between">
        <p className="title-text">{t("latestNews")}</p>
        <div className="flex flex-row items-center gap-5">
          <Dialog>
            <DialogTrigger asChild>
              <button className="h-10 gap-2 cursor-pointer rounded-[4px] border border-[#BDC7CE] p-2.5 flex flex-row items-center">
                <BiSolidCategoryAlt />
                <p className="text-[14px]">
                  {" "}
                  {categoryForFilter.length > 0
                    ? categoryForFilter
                    : t("chooseCategory")}{" "}
                </p>
              </button>
            </DialogTrigger>
            <DialogContent className="w-[340px] p-4 md:w-[420px] overflow-hidden">
              <DialogHeader>
                <DialogTitle>{t("chooseCategory")}</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-[10px] mt-[15px]">
                {BLOG_CATEGORY.map((category, index) => (
                  <button
                    key={category.key + index}
                    onClick={() => setTempCategory(`${category.name[locale]}`)}
                    className={`w-full cursor-pointer hover:text-white hover:bg-[#006FFF] transition-colors rounded-[4px] h-[40px] border border-[#DEDEE1] ${
                      tempCategory === category.name[locale] &&
                      "bg-[#006FFF] text-white"
                    }`}
                  >
                    <p>{category.name[locale]} </p>
                  </button>
                ))}
              </div>
              <DialogFooter className="w-full">
                <Button
                  onClick={handleCategoryApply}
                  className="w-full h-[50px] bg-[#006FFF] rounded-[4px] text-white font-medium"
                >
                  {t("apply")}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <button className="h-10 gap-2 cursor-pointer rounded-[4px] border border-[#BDC7CE] p-2.5 flex flex-row items-center">
                <IoCalendarClearOutline />
                <p className="text-[14px]">{renderDate()}</p>
              </button>
            </DialogTrigger>
            <DialogContent className="w-[340px] p-4 md:w-[420px] overflow-hidden">
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
                      } rounded-full text-white h-[15px] flex items-center justify-center`}
                    >
                      <FaCheck />
                    </div>
                    <p
                      className={`text-[13px] lg:text-[15px] ${
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
              {mode === "year" ? (
                <YearPicker onSelectYear={handleSelectYear} />
              ) : mode === "month" ? (
                <MonthPicker
                  selectedYear={
                    selectedYear !== null
                      ? selectedYear
                      : new Date().getFullYear()
                  }
                  onSelectMonth={handleSelectMonth}
                />
              ) : mode === "range" ? (
                <Calendar
                  mode="range"
                  selected={tempDate as DateRange | undefined}
                  month={getCalendarMonth()}
                  captionLayout="dropdown"
                  onSelect={setTempDate as (range: DateRange) => void}
                  className="rounded-none bg-inherit mx-auto"
                />
              ) : (
                <Calendar
                  mode="single"
                  selected={tempDate as Date | undefined}
                  month={getCalendarMonth()}
                  captionLayout="dropdown"
                  onSelect={setTempDate as (date: Date) => void}
                  className="rounded-none bg-inherit mx-auto"
                />
              )}
              <DialogFooter className="w-full">
                <Button
                  onClick={handleApply}
                  className="w-full h-[50px] bg-[#006FFF] rounded-[4px] text-white font-medium"
                >
                  {t("apply")}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="grid mt-5 lg:mt-6 grid-cols-1 gap-[25px] lg:grid-cols-3 lg:gap-[40px]">
        {currentBlogs.map((blog, index) => (
          <BlogCard read={true} key={blog.slug + index} blog={blog} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Pagination>
          <PaginationPrevious
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
          >
          </PaginationPrevious>
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <PaginationContent
                key={page}
                active={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page} 
              </PaginationContent>
            );
          })}
          <PaginationNext
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
          >
          </PaginationNext>
        </Pagination>
      </div>
    </section>
  );
};
