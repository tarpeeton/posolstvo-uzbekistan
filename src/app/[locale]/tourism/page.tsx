import { TourismMain } from "@/_components/Tourism/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Путешествуйте по Узбекистану — откройте для себя красоту и гостеприимство!",
  description:
    "Исследуйте уникальные туристические маршруты Узбекистана, насладитесь древней историей, живописной природой и теплом местного гостеприимства.",
};

export default function Page() {
  return (
    <main>
      <TourismMain />
    </main>
  );
}
