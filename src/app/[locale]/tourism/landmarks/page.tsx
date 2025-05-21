import { LandMarkMain } from "@/_components/Tourism/LandMarks/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Знаковые достопримечательности Узбекистана — путешествие по жемчужинам страны",
  description:
    "Откройте для себя самые знаменитые и впечатляющие памятники Узбекистана — история, культура и архитектура в каждом уголке.",
};

export default function Page() {
  return (
    <main>
      <LandMarkMain />
    </main>
  );
}
