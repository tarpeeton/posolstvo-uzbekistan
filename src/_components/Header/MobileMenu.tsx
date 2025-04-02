import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";
import { Button } from "@/ui/button";
import { NAV_ITEMS } from "@/constants/navigation";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../Switcher";

export const MobileMenu = () => {
  const pathname = usePathname();
  const t = useTranslations("navigation");
  const [open, setOpen] = React.useState(false);
  const locale = useLocale();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72 sm:w-80 p-4">
        <div className="flex  flex-row h-[20px] justify-between items-center mb-4">
          <LanguageSwitcher mobile={true} currentLocale={locale} />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
          ></Button>
        </div>
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.key}>
              <Link
                href={item.href}
                className={`block px-2 py-1 rounded hover:bg-muted transition ${
                  pathname === item.href ? "bg-muted font-semibold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </Link>
              {item.options && (
                <div className="ml-4 flex flex-col">
                  {item.options.map((option) => (
                    <Link
                      key={option.key}
                      href={{
                        pathname: "/news",
                        query: { category: option.id },
                      }}
                      className={`text-sm px-2 py-1 hover:underline ${
                        pathname === option.href ? "font-semibold" : ""
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {option.title[locale]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
