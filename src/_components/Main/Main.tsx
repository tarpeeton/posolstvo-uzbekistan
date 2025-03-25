import { NewsBanner } from "./Banner"
import { LatestNews } from "./LatestNews"
import { MediaBlog } from "./MediaBlog"
import { EmbassySwiper } from "./Slider"
import { ThemeContent } from "./Theme"



export const MainPage = () => {
    return (
        <div>
            <NewsBanner />
            <ThemeContent />
            <LatestNews />
            <MediaBlog />
            <EmbassySwiper />
        </div>
    )
}