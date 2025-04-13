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
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { Axios } from "@/utils/api";
import { IPost } from "@/types/posts";

interface ICategoryFilterForPosts {
  id: number | null;
  name: string;
}

type DateRange = { from: Date; to?: Date };
type DateOrRange = Date | DateRange | undefined;
type Mode = "single" | "range" | "month" | "year";

export const LatestsNews = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [posts, setAllPost] = useState<IPost[] | []>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[] | []>([]);

  const [activeFilter, setActiveFilter] = useState<string>("day");
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  const [tempDate, setTempDate] = useState<DateOrRange>(undefined);
  const [selectedDate, setSelectedDate] = useState<DateOrRange>(undefined);
  const [mode, setMode] = useState<Mode>("single");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [categoryForFilter, setCategoryForFilter] = useState<string>("");
  const activateFilter = (key: string) => {
    setActiveFilter(key);
  };
  const [tempCategory, setTempCategory] = useState<ICategoryFilterForPosts>({
    id: null,
    name: "",
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  // Fetch all posts
  useEffect(() => {
    const getAllPosts = async () => {
      const res = await Axios.get(`/post?lang=${locale}`);
      setAllPost(res.data);
      setFilteredPosts(res.data);
    };

    getAllPosts();
  }, [locale]);

  useEffect(() => {
    if (categoryId) {
      const categoryObj = BLOG_CATEGORY.find(cat => cat.id.toString() === categoryId);
      if (categoryObj) {
        setTempCategory({
          id: categoryObj.id,
          name: categoryObj.name[locale]
        });
        setCategoryForFilter(categoryObj.name[locale]);
        
        applyFilters(categoryObj.id, undefined, mode, selectedYear);
      }
    }
  }, [categoryId, locale, posts]);

  const applyFilters = (
    categoryId: number | null, 
    dateFilter: DateOrRange, 
    dateMode: Mode,
    year: number | null
  ) => {
    let filtered = [...posts];
    
    if (categoryId !== null) {
      filtered = filtered.filter(post => post.category_id === categoryId);
    }
    
    if (dateFilter) {
      if (dateMode === "single" && dateFilter instanceof Date) {
        filtered = filtered.filter(post => {
          const postDate = new Date(post.created_at);
          return (
            postDate.getDate() === dateFilter.getDate() &&
            postDate.getMonth() === dateFilter.getMonth() &&
            postDate.getFullYear() === dateFilter.getFullYear()
          );
        });
      } else if (dateMode === "range" && !(dateFilter instanceof Date) && dateFilter.from) {
        const fromDate = new Date(dateFilter.from);
        fromDate.setHours(0, 0, 0, 0);
        
        const toDate = dateFilter.to ? new Date(dateFilter.to) : new Date(fromDate);
        toDate.setHours(23, 59, 59, 999);
        
        filtered = filtered.filter(post => {
          const postDate = new Date(post.created_at);
          return postDate >= fromDate && postDate <= toDate;
        });
      } else if (dateMode === "month" && dateFilter instanceof Date) {
        // Filter by month
        const selectedMonth = dateFilter.getMonth();
        const selectedYear = dateFilter.getFullYear();
        
        filtered = filtered.filter(post => {
          const postDate = new Date(post.created_at);
          return (
            postDate.getMonth() === selectedMonth && 
            postDate.getFullYear() === selectedYear
          );
        });
      } else if (dateMode === "year" && year !== null) {
        filtered = filtered.filter(post => {
          const postDate = new Date(post.created_at);
          return postDate.getFullYear() === year;
        });
      }
    }
    
    setFilteredPosts(filtered);
    setCurrentPage(1); 
  };

  useEffect(() => {
    if (activeFilter === "week") {
      setMode("range");
      setTempDate(undefined); 
    } else if (activeFilter === "day") {
      setMode("single");
      setTempDate(undefined); 
    } else if (activeFilter === "year") {
      setMode("year");
      setSelectedYear(null); 
    } else if (activeFilter === "month") {
      setMode("month");
      setTempDate(undefined);
    }
  }, [activeFilter]);

  const renderDate = (): string => {
    if (!selectedDate) {
      return t("chooseDate") || "Choose date";
    }
    return formatSelectedDate(selectedDate, mode, locale, t);
  };

  const getCalendarMonth = (): Date | undefined => {
    if (!tempDate) return new Date(); 
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
    // Apply date filter
    applyFilters(tempCategory.id, tempDate, mode, selectedYear);
  };

  const setCotegoryForFilterPosts = (id: number, name: string) => {
    setTempCategory({ id: id, name: name });
  };

  // Apply the category filter
  const handleApplyCategory = () => {
    setCategoryForFilter(tempCategory.name);
    
    // Apply filters
    applyFilters(tempCategory.id, selectedDate, mode, selectedYear);
    
    if (tempCategory.id !== null) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", tempCategory.id.toString());
      
      router.push(`/${locale}/news?${params.toString()}`);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("category");
      router.push(`/${locale}/news${params.toString() ? `?${params.toString()}` : ''}`);
    }
  };

  const currentBlogs = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                    onClick={() =>
                      setCotegoryForFilterPosts(
                        category.id,
                        category.name[locale]
                      )
                    }
                    className={`w-full cursor-pointer hover:text-white hover:bg-[#006FFF] transition-colors rounded-[4px] h-[40px] border border-[#DEDEE1] ${
                      tempCategory.id === category.id &&
                      "bg-[#006FFF] text-white"
                    }`}
                  >
                    <p>{category.name[locale]} </p>
                  </button>
                ))}
              </div>
              <DialogFooter className="w-full">
                <Button
                  onClick={handleApplyCategory}
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
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog, index) => (
            <BlogCard read={true} key={blog.slug + index} blog={blog} />
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p>{t("noPostsFound") || "No posts found"}</p>
          </div>
        )}
      </div>

      {filteredPosts.length > 0 && (
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            ></PaginationPrevious>
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
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            ></PaginationNext>
          </Pagination>
        </div>
      )}
    </section>
  );
};