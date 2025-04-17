"use client"
import { useState , useEffect } from "react";
import { NewsBanner } from "./Banner";
import { LatestNews } from "./LatestNews";
import { MediaBlog } from "./MediaBlog";
import { EmbassySwiper } from "./Slider";
import { ThemeContent } from "./Theme";
import { MEDIA_BLOG } from "@/constants/media-blog";
import { Axios } from "@/utils/api";
import { useLocale } from "next-intl";
import { IPost } from "@/types/posts";





export const MainPage = () => {
  const [mediaLinks, setMediaLinks] = useState<string[]>([]);
  const locale = useLocale();

useEffect(() => {
  const fetchFilteredMediaBlog = async () => {
    try {
      const res = await Axios.get(`/post?lang=${locale}`);
      const data: IPost[] = res.data;

      const links: string[] = [];

      data?.forEach((item) => {
        if (Array.isArray(item.media)) {
          item.media.forEach((mediaItem) => {
            if (mediaItem.link) {
              links.push(mediaItem.link);
            }
          });
        }
      });

      setMediaLinks(links);
    } catch (error) {
      console.error("Failed to fetch media blog:", error);
    }
  };

  fetchFilteredMediaBlog();
}, [locale]);



  return (
    <div>
      <NewsBanner />
      <ThemeContent />
      <LatestNews />
      <div className="px-[20px] lg:px-[120px]">
        <MediaBlog links={mediaLinks} />
      </div>
      <EmbassySwiper slides={MEDIA_BLOG} />
    </div>
  );
};
