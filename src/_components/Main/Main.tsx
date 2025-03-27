import { NewsBanner } from "./Banner";
import { LatestNews } from "./LatestNews";
import { MediaBlog } from "./MediaBlog";
import { EmbassySwiper } from "./Slider";
import { ThemeContent } from "./Theme";
import { MEDIA_BLOG } from "@/constants/media-blog";



export const MainPage = () => {
  return (
    <div>
      <NewsBanner />
      <ThemeContent />
      <LatestNews />
      <div className="px-[20px] lg:px-[120px]">
        <MediaBlog />
      </div>
      <EmbassySwiper slides={MEDIA_BLOG} />
    </div>
  );
};
