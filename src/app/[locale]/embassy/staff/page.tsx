import { StaffMain } from "@/_components/Embassy/Staff/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сотрудники Посольства Республики Узбекистан в Пакистане — Контактная информация",
  description:
    "Информация о сотрудниках Посольства Республики Узбекистан в Пакистане, их должностях и контактных данных для связи.",
};

export default function MainStaffPage() {
  return (
    <main>
      <StaffMain />
    </main>
  );
}
