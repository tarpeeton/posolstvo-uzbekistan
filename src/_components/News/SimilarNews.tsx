import { BLOG_DATA } from "@/constants/blog"
import { BlogCard } from "@/ui/BlogCard"
import { useTranslations } from "next-intl"




export const SimilarNews = () => {
    const t = useTranslations()

    return (
        <section className="mt-32 pb-30">
            <p className="title-text">{t('relatedNews')}</p>

            <div className="grid mt-5 lg:mt-6 grid-cols-1 gap-[25px] lg:grid-cols-3 lg:gap-[40px]">
                    {BLOG_DATA.slice(0 , 3).map((blog, index) => (
                      <BlogCard read={true} key={blog.slug + index} blog={blog} />
                    ))}
                  </div>
        </section>
    )
}