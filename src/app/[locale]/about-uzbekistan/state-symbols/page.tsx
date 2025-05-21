import { StateSymbolsMain } from "@/_components/AboutUzbekistan/StateSymbols/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Государственные символы – Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description:
    "Государственные символы Республики Узбекистан: флаг, герб и гимн. Их значение, история создания и официальный статус.",
};

export default function StateSymbols() {
  return (
    <div>
      <StateSymbolsMain />
    </div>
  );
}
