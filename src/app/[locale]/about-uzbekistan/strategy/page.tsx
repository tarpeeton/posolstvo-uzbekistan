import { StrategyMain } from "@/_components/AboutUzbekistan/Strategy/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Стратегия развития – Посольство Республики Узбекистан в Исламской Республике Пакистан",
  description:
    "Ознакомьтесь с ключевыми направлениями стратегии развития Республики Узбекистан: реформы, приоритеты и цели, направленные на устойчивый рост и модернизацию страны.",
};

export default function StrategyUzbekistan() {
  return (
    <div>
      <StrategyMain />
    </div>
  );
}
