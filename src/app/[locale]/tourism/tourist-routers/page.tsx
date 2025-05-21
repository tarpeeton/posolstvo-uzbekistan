import { TouristRoutesMain } from "@/_components/Tourism/TouristRoutes/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Лучшие туристические маршруты Узбекистана — откройте неизведанные сокровища страны",
  description:
    "Путешествуйте по уникальным маршрутам Узбекистана: исторические города, живописные пейзажи и аутентичные впечатления ждут вас!",
};

export default function Page() {
  return (
    <main>
      <TouristRoutesMain />
    </main>
  );
}
