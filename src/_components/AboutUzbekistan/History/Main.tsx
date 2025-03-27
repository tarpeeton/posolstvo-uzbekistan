import { EmbassySwiper } from "@/_components/Main/Slider"
import { InfoHistory } from "./Info"
import { MEDIA_BLOG } from "@/constants/media-blog"
import { HistoryVideo } from "./HistoryVideo"
import { InterestFacts } from "./InterestFacts"



export const UzbekistanHistoryMain = () => {
    return (
        <main>
            <InfoHistory />
            <EmbassySwiper slides={MEDIA_BLOG} />
            <HistoryVideo />
            <InterestFacts />
        </main>
    )
}