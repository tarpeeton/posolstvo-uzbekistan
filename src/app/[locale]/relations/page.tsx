import { RelationsMain } from "@/_components/Relations/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Внешние отношения Республики Узбекистан — Международное сотрудничество",
  description:
    "Информация о международных отношениях и дипломатических связях Республики Узбекистан с другими странами, включая Пакистан.",
};

export default function RelationsPage() {
  return (
    <div>
      <RelationsMain />
    </div>
  );
}
