import { MediaBlog } from "@/_components/Main/MediaBlog"
import { SimilarNews } from "../SimilarNews"
import { Blog } from "./Blog"




export const CurrentBlog = () => {
    return (
        <main className="px-[20px] lg:px-[120px]">
            <Blog/>
            <MediaBlog />
            <SimilarNews />
        </main>
    )
}