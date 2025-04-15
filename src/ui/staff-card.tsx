import { TMultiLang } from "@/types/multiLang";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

type StaffCardItemProps = {
  image: string;
  name: string;
  opp: string;
  email: string;
};

export const StaffCardItem = ({
  name,
  opp,
  email,
  image,
}: StaffCardItemProps) => {
  const locale = useLocale();
  return (
    <article>
      <div className="h-[300px] max-h-[320px] ">
        <Image
          width={300}
          alt={name[locale]}
          height={300}
          className="rounded-[4px] w-full h-full object-cover"
          src={image}
        />
      </div>
      <div className="flex flex-col gap-[4px] mt-4">
        <p className="text-[20px]">{name}</p>
        <p className="text-[15px]">{opp}</p>
        {email && email.trim() !== "" && (
          <Link href={`mailto:${email}`} className="text-[16px] text-[#006FFF]">
            {email}
          </Link>
        )}
      </div>
    </article>
  );
};
