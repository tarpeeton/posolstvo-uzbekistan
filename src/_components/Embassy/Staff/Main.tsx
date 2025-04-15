"use client";
import { useState, useEffect } from "react";
import { Breadcrumb } from "@/ui/breadcrumb";
import { StaffCardItem } from "@/ui/staff-card";
import { useLocale, useTranslations } from "next-intl";
import { Axios } from "@/utils/api";
import { IStaff } from "@/types/staff";

export const StaffMain = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [Staffs, setStaffs] = useState<IStaff[]>([]);

  useEffect(() => {
    const getAllStaffs = async () => {
      const res = await Axios.get(`/employee?lang=${locale}`);
      setStaffs(res.data.data);
    };

    getAllStaffs();
  }, [locale]);

  return (
    <section className="px-[20px] lg:px-[120px]">
      <div className="mt-[12px] lg:mt-[24px]">
        <Breadcrumb
          items={[
            {
              label: {
                ru: "Главная",
                uz: "Bosh sahifa",
                en: "Home",
                ur: "ہوم",
              },
              href: "/",
            },
            {
              label: {
                ru: "Посольство",
                uz: "Elchixona",
                en: "Embassy",
                ur: "سفارت خانہ",
              },
              href: "/embassy",
            },
            {
              label: {
                ru: "Сотрудники",
                uz: "Xodimlar",
                en: "Staff",
                ur: "عملہ",
              },
              isCurrent: true,
            },
          ]}
        />
      </div>
      <div className="mt-[24px] lg:mt-[48px] pb-[80px] lg:pb-[120px]">
        <nav className="flex flex-row items-center justify-between">
          <h1 className="text-[20px] lg:text-[32px]">{t("staff")}</h1>
        </nav>
        <div className="grid grid-cols-1 px-[16px] lg:mt-[25px] md:px-0 mt-[20px] gap-[30px] lg:grid-cols-4 lg:gap-[40px] ">
          {Staffs?.map((staf, index) => (
            <StaffCardItem
              key={index}
              name={staf.fullname}
              image={staf.image}
              email={staf?.email || null}
              opp={staf.job}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
