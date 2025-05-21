import { MainNews } from "@/_components/News/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости – Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description:
    "Читайте актуальные новости и события, связанные с деятельностью Посольства Республики Узбекистан в Исламской Республике Пакистан. Официальные заявления, дипломатические встречи и многое другое.",
};

export default function News() {
  return (
    <div>
      <MainNews />
    </div>
  );
}
