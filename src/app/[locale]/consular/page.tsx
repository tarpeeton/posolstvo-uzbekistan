import { ConsularMain } from "@/_components/Consular/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Консульские услуги – Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description:
    "Информация о консульских услугах, предоставляемых Посольством Республики Узбекистан в Пакистане: оформление виз, паспорта, нотариальные услуги и помощь гражданам.",
};

export default function Page() {
  return (
    <main>
      <ConsularMain />
    </main>
  );
}
