import { ContactAmbassadorMain } from "@/_components/Embassy/ContactAmbassador/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты Посла Республики Узбекистан в Пакистане — Свяжитесь с послом",
  description:
    "Официальные контактные данные Посла Республики Узбекистан в Исламской Республике Пакистан. Свяжитесь с посольством для получения необходимой информации.",
};

export default function EmbassyMainPage() {
  return (
    <main>
      <ContactAmbassadorMain />
    </main>
  );
}
