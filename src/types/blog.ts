import { TMultiLang } from "./multiLang"



export type TBlog = {
    title: TMultiLang,
    slug: string
    description: TMultiLang,
    date: string ,
    imageUrl: string
    viewsCount: number,
    category_id: string,
}