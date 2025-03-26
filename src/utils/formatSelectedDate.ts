import { format } from "date-fns";

type DateRange = { from: Date; to?: Date };
type DateOrRange = Date | DateRange | undefined;
type Mode = "single" | "range" | "month" | "year";

export function formatSelectedDate(
  selectedDate: DateOrRange,
  mode: Mode,
  locale: string,
  t: (key: string) => string
): string {
  if (!selectedDate) {
    return t("chooseDate");
  }

  if (mode === "single" && selectedDate instanceof Date) {
    return format(selectedDate, "dd.MM.yyyy");
  }

  if (mode === "range" && !(selectedDate instanceof Date)) {
    const { from, to } = selectedDate;
    if (from && to) {
      return `${format(from, "dd.MM.yyyy")} - ${format(to, "dd.MM.yyyy")}`;
    }
    return from ? format(from, "dd.MM.yyyy") : t("chooseDate");
  }

  if (mode === "month" && selectedDate instanceof Date) {
    const monthNames: Record<string, string[]> = {
      en: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ],
      ru: [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
      ],
      uz: [
        "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
        "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr",
      ],
    };
    const names = monthNames[locale] || monthNames["en"];
    const yearString = format(selectedDate, "yyyy");
    const monthName = names[selectedDate.getMonth()];
    return `${yearString} - ${monthName}`;
  }

  return t("chooseDate");
}
