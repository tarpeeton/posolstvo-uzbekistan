"use client";
import { useEffect  , useState} from "react";
import { useLocale, useTranslations } from "next-intl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BlogCard } from "@/ui/BlogCard";
import { IPost } from "@/types/posts";
import { Axios } from "@/utils/api";


export const LatestNews = () => {
  const t = useTranslations();
  const [sliceNumber, setSliceNumber] = useState<number>(3);
  const [posts , setPosts] = useState<IPost[] | []>([])
  const locale = useLocale()



useEffect(() => {
  const getAllPosts = async () => {
    const res = await Axios.get(`/post?lang=${locale}`)
    const sortedPosts = [...res.data].sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })
    
    setPosts(sortedPosts)
  }

  getAllPosts()
}, [locale])


  const showMore = () => {
    if (posts.length === sliceNumber) {
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
          {posts.slice(0, sliceNumber).map((blog, index) => (
          <BlogCard  blog={blog}  key={blog.img + index} />
          ))}
        </div>

        {/* BUTTOON */}

        <button
          aria-label={
            posts.length === sliceNumber ? t("showLess") : t("showMore")
          }
          onClick={showMore}
          className="bg-[#427EFF] rounded-[4px] cursor-pointer h-12 flex flex-row items-center justify-center gap-2 hover:bg-[#4f42ff] w-full text-white"
        >
          <p>
            {posts.length === sliceNumber ? t("showLess") : t("showMore")}
          </p>
          <MdKeyboardArrowDown
            className={`md:text-[20px] ${
              posts.length === sliceNumber ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </section>
  );
};
