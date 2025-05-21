import { EmbassyMain } from "@/_components/Embassy/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Посольство Республики Узбекистан в Пакистане — Официальный сайт",
  description:
    "Официальный сайт Посольства Республики Узбекистан в Исламской Республике Пакистан. Информация об услугах, контактах и последних новостях посольства.",
};

export default function EmbassyMainPage() {
  return (
    <div>
      <EmbassyMain />
    </div>
  );
}
