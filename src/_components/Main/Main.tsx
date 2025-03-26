import { NewsBanner } from "./Banner";
import { LatestNews } from "./LatestNews";
import { MediaBlog } from "./MediaBlog";
import { EmbassySwiper } from "./Slider";
import { ThemeContent } from "./Theme";

export const MainPage = () => {
  return (
    <div>
      <NewsBanner />
      <ThemeContent />
      <LatestNews />
      <div className="px-[20px] lg:px-[120px]">
        <MediaBlog />
      </div>
      <EmbassySwiper />
    </div>
  );
};
