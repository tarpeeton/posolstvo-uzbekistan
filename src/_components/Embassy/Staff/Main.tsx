import { STAFF } from "@/constants/staff";
import { Breadcrumb } from "@/ui/breadcrumb";
import { StaffCardItem } from "@/ui/staff-card";
import { useTranslations } from "next-intl";
import { LiaDoorOpenSolid } from "react-icons/lia";

export const StaffMain = () => {
  const t = useTranslations();

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
          <button
            className="flex flex-row  h-[35px] lg:h-[40px] px-4 items-center gap-2 cursor-pointer border border-[#BDC7CE] rounded-[4px]"
            aria-label={t("departments")}
          >
            <LiaDoorOpenSolid className="rotate-180 w-[22px] h-[22px]" />
            {t("departments")}
          </button>
        </nav>
        <div className="grid grid-cols-1 px-[16px] lg:mt-[25px] md:px-0 mt-[20px] gap-[30px] lg:grid-cols-4 lg:gap-[40px] ">
          {STAFF.map((staf, index) => (
            <StaffCardItem
              key={index}
              name={staf.name}
              image={staf.img}
              email={staf.email}
              opp={staf.opp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
