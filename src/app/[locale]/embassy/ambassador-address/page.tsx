import { AmbassadorMain } from "@/_components/Embassy/AmbassadorAddress/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Адрес Посольства Республики Узбекистан в Пакистане — Контактная информация",
  description:
    "Официальный адрес Посольства Республики Узбекистан в Исламской Республике Пакистан, контактные данные и режим работы.",
};

export default function AmbassadorAddressPage() {
  return (
    <div>
       <AmbassadorMain />
    </div>
  );
}
