export interface IPost {
  id: number;
  title: string;
  description: string;
  content: string;
  img: string;
  slug: string;
  views_count: number | null;
  media: {
    link: string;
  }[];
  category_id: number;
  created_at: string;
  updated_at: string;
}