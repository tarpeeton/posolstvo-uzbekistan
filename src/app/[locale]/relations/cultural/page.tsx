import { CulturalMain } from "@/_components/Relations/Cultural/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Уникальная культура Узбекистана — сокровища древних традиций и современного искусства",
  description:
    "Погрузитесь в богатство узбекской культуры: от величественных исторических памятников до живых традиций и яркого искусства современности.",
};

export default function Page() {
  return (
    <main>
      <CulturalMain />
    </main>
  );
}
