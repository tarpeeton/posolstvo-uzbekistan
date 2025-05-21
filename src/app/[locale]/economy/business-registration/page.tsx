import { BusinessMain } from "@/_components/Economy/Business/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бизнес в Узбекистане — Развитие, поддержка и возможности",
  description:
    "Полезная информация для предпринимателей и инвесторов о развитии бизнеса в Узбекистане, государственных программах поддержки и бизнес-климате.",
};

export default function Page() {
  return (
    <main>
      <BusinessMain />
    </main>
  );
}
