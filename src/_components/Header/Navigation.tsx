"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { NAV_ITEMS } from "@/constants/navigation";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();

  function stripLocale(path: string) {
    const segments = path.split("/").filter(Boolean);
    if (segments.length > 0 && ["ru", "uz", "en"].includes(segments[0])) {
      segments.shift();
    }
    return "/" + segments.join("/");
  }

  function isActiveRoute(href: string) {
    const currentPath = stripLocale(pathname);

    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  }

  return (
    <nav
      aria-label="Main Navigation"
      className="border-b hidden w-full md:block border-gray-300 bg-[#BDC7CE4D] h-[43px] px-5 lg:px-[120px] relative"
    >
      <ul className="flex w-full h-full  md:space-x-2 px-4 pt-3 2xl:space-x-7">
        {NAV_ITEMS.map((item) => {
          const active = isActiveRoute(item.href);

          return (
            <li key={item.key} className="text-[13px] group ">
              <Link
                href={item.href}
                className={`pb-3 hover:text-[#006FFF] transition-colors ${
                  active
                    ? "border-b-2 border-[#0E0F18] text-[#0E0F18] font-semibold"
                    : "text-[#767682]"
                }`}
              >
                {t(item.key)}
              </Link>
              {item.options && (
                <div className="absolute w-screen shadow-2xl left-0 bg-white opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity mt-2 z-50">
                  <div className="flex flex-col pl-[120px] gap-[10px] p-4">
                    {item.options.map((option, idx) => (
                      <Link
                        key={idx}
                        href={{
                          pathname: "/news",
                          query: { category: option.id },
                        }}
                        className="block hover:text-[#006FFF] transition-colors text-sm text-gray-800"
                      >
                        {option.title[locale as keyof typeof option.title]}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
