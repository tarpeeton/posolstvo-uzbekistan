"use client"
import { MediaBlog } from "@/_components/Main/MediaBlog"
import { SimilarNews } from "../SimilarNews"
import { Blog } from "./Blog"
import { useState , useEffect } from "react"
import { Axios } from "@/utils/api"
import { useParams } from "next/navigation"
import { useLocale } from "next-intl"
import { IPost } from "@/types/posts"


export const CurrentBlog = () => {
    const {slug} = useParams()
    const locale = useLocale()


    const [blogData , setBlogData] = useState<IPost | null>(null)

        useEffect(() => {
            const fetchCurrentBlog = async () => {
                const res = await  await Axios.get(`/post/${slug}?lang=${locale}`);
                setBlogData(res.data)
            }
            fetchCurrentBlog()
        } , [locale])



    return (
        <main className="px-[20px] lg:px-[120px]">
            <Blog BLOG_DATA={blogData}/>
            <MediaBlog links={blogData?.media?.map(item => item.link) || []} />
            <SimilarNews  />
        </main>
    )
}