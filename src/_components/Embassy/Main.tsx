import { LatestNews } from "../Main/LatestNews"
import { MediaBlog } from "../Main/MediaBlog"
import { EmbassySwiper } from "../Main/Slider"
import { EmbassyActualTheme } from "./ActualTheme"
import { EmbassyBanner } from "./Banner"
import { MEDIA_BLOG } from "@/constants/media-blog"





export const EmbassyMain = () => {
    return (
        <div >
            <EmbassyBanner />
            <EmbassyActualTheme />
            <LatestNews />
            <div className="px-[20px] lg:px-[120px]">
            <MediaBlog />

            </div>
            <EmbassySwiper slides={MEDIA_BLOG} />
        </div>

    )
}