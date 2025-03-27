import { Link } from "@/i18n/routing";
import { TMultiLang } from "@/types/multiLang";
import { useLocale } from "next-intl";
import Image from "next/image";

type ThemeContentItemProps = {
  name: TMultiLang;
  href: string;
  image?: string;
};

export const ThemeContentItem = ({
  name,
  image,
  href,
}: ThemeContentItemProps) => {
  const locale = useLocale();

  return (
    <Link
      href={`${href}`}
      aria-label={name[locale]}
      className="bg-[#0051FF1F] h-[100px] bg-opacity-[12%] py-6 px-5"
    >
      <div className="flex flex-row items-center gap-2">
        {image && (
          <Image
            src={image}
            alt={name[locale]}
            width={80}
            height={80}
            quality={100}
            className=" md:w-[25px] md:h-[25px] object-cover w-[20px] h-[20px] 
                            [filter:brightness(0)_saturate(100%)_invert(29%)_sepia(92%)_saturate(6186%)_hue-rotate(192deg)_brightness(97%)_contrast(105%)]"
          />
        )}
        <p className="text-[18px] text-[#0E0F18] md:text-[20px]">
          {name[locale]}
        </p>
      </div>
    </Link>
  );
};
