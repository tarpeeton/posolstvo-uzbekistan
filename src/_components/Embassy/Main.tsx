"use client";
import { useState, useEffect } from "react";
import { LatestNews } from "../Main/LatestNews";
import { MediaBlog } from "../Main/MediaBlog";
import { EmbassySwiper } from "../Main/Slider";
import { EmbassyActualTheme } from "./ActualTheme";
import { EmbassyBanner } from "./Banner";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { Axios } from "@/utils/api";
import { IPost } from "@/types/posts";
import { useLocale } from "next-intl";

export const EmbassyMain = () => {
  const [allPosts, setAllPosts] = useState<IPost[] | []>([]);
  const [mediBlogLinks, setMediaBlogLinks] = useState<string[]>([]);
  const locale = useLocale();

  useEffect(() => {
    const getAllPosts = async () => {
      const res = await Axios.get(`/post?lang=${locale}`);
      const posts: IPost[] = res.data;

      setAllPosts(posts);

      const allMediaLinks: string[] = posts
        .flatMap(post => post.media || []) 
        .map(mediaItem => mediaItem.link)  
        .filter(link => link && link.trim() !== "") 

      setMediaBlogLinks(allMediaLinks.slice(0, 3));
    };

    getAllPosts();
  }, [locale]);

  return (
    <div>
      <EmbassyBanner />
      <EmbassyActualTheme />
      <LatestNews />
      <div className="px-[20px] lg:px-[120px]">
        <MediaBlog links={mediBlogLinks} />
      </div>
      <EmbassySwiper slides={MEDIA_BLOG} />
    </div>
  );
};
