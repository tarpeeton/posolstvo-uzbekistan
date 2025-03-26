import { LatestsNews } from "./Latests"
import { SimilarNews } from "./SimilarNews"




export const MainNews = () => {
    return (
        <main className="px-[20px] lg:px-[120px] " >
            <LatestsNews />
            <SimilarNews />
        </main>
    )
}