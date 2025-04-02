import { uzMonths, uzWeekdays } from "@/constants/weeks";

export function formatDate(date: Date, locale: string) {
  if (locale === "uz") {
    const weekday = uzWeekdays[date.getDay()];
    const month = uzMonths[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const w = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    const m = month.charAt(0).toUpperCase() + month.slice(1);
    return `${w}, ${m} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
  } else if (locale === "ru") {
    return new Intl.DateTimeFormat("ru-RU", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    })
      .format(date)
      .replace(/(^|\s)\S/, (s) => s.toUpperCase()); // Birinchi harfni katta qilish (rus tili uchun)
  } else if (locale === "ur") {
    // Urdu tili uchun
    return new Intl.DateTimeFormat("ur", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }).format(date);
  } else {
    // Sukut bo‘yicha (masalan, en-US)
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }).format(date);
  }
}
