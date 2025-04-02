"use client";
import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
import clsx from "clsx";
import { useLocale } from "next-intl";

type LanguageOption = {
  label: string;
  value: string;
};

const LANGUAGES: LanguageOption[] = [
  { label: "Русский", value: "ru" },
  { label: "O‘zbekcha", value: "uz" },
  { label: "English", value: "en" },
  { label: "اردو", value: "ur" },
];

export default function LanguageSwitcher({
  currentLocale,
  mobile,
}: {
  currentLocale: string;
  mobile: boolean;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const currentLabel =
    LANGUAGES.find((lang) => lang.value === currentLocale)?.label ||
    (locale === "ru"
      ? "Язык"
      : locale === "uz"
      ? "Til"
      : locale === "en"
      ? "Language"
      : locale === "ur"
      ? "زبان"
      : "");

  function getLocalePath(path: string, newLocale: string) {
    const segments = path.split("/").filter(Boolean);
    if (["ru", "uz", "en" , "ur"].includes(segments[0])) {
      segments.shift();
    }
    return "/" + [newLocale, ...segments].join("/");
  }

  function handleSelect(newLocale: string) {
    setOpen(false);
    if (newLocale === currentLocale) return;
    const newPath = getLocalePath(pathname, newLocale);
    const query = searchParams.toString();
    const finalUrl = query ? `${newPath}?${query}` : newPath;
    router.replace(finalUrl);
  }

  return (
    <div className="relative inline-block z-[150]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center h-[40px] rounded-md border border-gray-300 
                   bg-white px-3 py-1.5 text-sm font-medium text-black 
                   hover:bg-gray-50 focus:outline-none"
      >
        {currentLabel}
        <MdKeyboardArrowDown
          className={clsx(
            "ml-1 h-5 w-5 text-gray-500 transition-transform duration-150",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          className={`absolute  ${
            mobile ? "left-[20px]" : "right-0"
          }  mt-2 w-36 origin-top-right 
                     rounded-md border border-gray-200 bg-white 
                     shadow-md focus:outline-none`}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleSelect(lang.value)}
              className={clsx(
                "block w-full px-4 py-2 text-left text-sm hover:bg-gray-100",
                lang.value === currentLocale && "font-semibold text-blue-600"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
