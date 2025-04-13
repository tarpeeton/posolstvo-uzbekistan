"use client";
import { useEffect, useState } from "react";
import { BlogCard } from "@/ui/BlogCard";
import { useLocale, useTranslations } from "next-intl";
import { IPost } from "@/types/posts";
import { Axios } from "@/utils/api";

export const SimilarNews = () => {
  const t = useTranslations();
  const [posts, setAllPost] = useState<IPost[] | []>([]);
  const locale = useLocale();

  useEffect(() => {
    const getAllPosts = async () => {
      const res = await Axios.get(`/post?lang=${locale}`);
      setAllPost(res.data);
    };

    getAllPosts();
  }, []);

  return (
    <section className="mt-32 pb-30">
      <p className="title-text">{t("relatedNews")}</p>

      <div className="grid mt-5 lg:mt-6 grid-cols-1 gap-[25px] lg:grid-cols-3 lg:gap-[40px]">
        {posts.slice(0, 3).map((blog, index) => (
          <BlogCard read={true} key={blog.slug + index} blog={blog} />
        ))}
      </div>
    </section>
  );
};
