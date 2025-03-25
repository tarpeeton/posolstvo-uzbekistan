"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLinkSharp } from "react-icons/io5";
import { useState, ChangeEvent } from "react";
import axios from "axios";

type IFormType = {
  fullName: string;
  email: string;
};

export const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [sending , setSending] = useState(false)

  const [formData, setFormData] = useState<IFormType>({
    fullName: "",
    email: "",
  });

  const handleChange =
    (key: keyof IFormType) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true)
    try {
      const response = await axios.post("/api/feedback", formData);
      console.log("Response:", response.data);
      setFormData({ fullName: "", email: "" });
      setSending(false)
    } catch (error) {
      console.error("Error submitting form:", error);
      setSending(false)

    }
  };

  return (
    <footer>
      <div className="flex flex-col lg:flex-row lg:items-center px-[20px] gap-[40px] lg:px-[120px] py-[35px] bg-[#0E0F18]">
        <div>
          <div className="flex flex-row items-center gap-2.5">
            <Image
              alt="logo"
              src={"/LOGO.png"}
              quality={100}
              width={40}
              height={40}
              className="md:w-[60px] md:h-[55px] object-cover"
            />

            <Link
              href={"/"}
              className="text-[#569FFF] text-[12.3px] lg:text-[15px] font-medium whitespace-pre-wrap"
            >
              {t("title")}
            </Link>
          </div>
          <div className="flex flex-col gap-[18px] lg:mt-[60px]">
            <p className="text-title text-[20px] text-white">
              {locale === "ru" ? "Контакты:" : locale === "uz" ? "" : ""}
            </p>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-row gap-[8px] items-center ">
                <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                  <FaPhoneAlt className="text-white" />
                </div>
                <p className="text-white font-medium">92-51 226-47-46</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center ">
                <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                  <MdOutlineAlternateEmail className="text-white" />
                </div>
                <p className="text-white font-medium">uzbekembassy@gmail.com</p>
              </div>
              <div className="flex flex-row gap-[8px] items-center ">
                <div className="rounded-[5px] flex items-center justify-center min-w-[36px] h-[36px]  bg-[#25262F] ">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <p className="text-white font-medium whitespace-pre-wrap">
                  House №40, Street Khayaban-e-Iqbal, Sector F-8/3, Islamabad,
                  Pakistan
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 lg:mt-[50px] ">
            <div>
              <p className="text-title text-[20px] text-white">
                {locale === "ru" ? "Соцсети" : locale === "uz" ? "" : ""}
              </p>
              <div className="flex flex-col gap-[10px] mt-[18px]">
                <div className="flex flex-row gap-[8px] items-center ">
                  <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                    <FaFacebookF className="text-white" />
                  </div>
                  <p className="text-white font-medium">Facebook</p>
                </div>
                <div className="flex flex-row gap-[8px] items-center ">
                  <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                    <FaTwitter className="text-white" />
                  </div>
                  <p className="text-white font-medium">Twitter</p>
                </div>
                <div className="flex flex-row gap-[8px] items-center ">
                  <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                    <FaInstagram className="text-white" />
                  </div>
                  <p className="text-white font-medium whitespace-pre-wrap">
                    Instagram
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-title text-[20px] text-white">
                {locale === "ru" ? "Быстрые ссылки" : locale === "uz" ? "" : ""}
              </p>
              <div className="flex flex-col gap-[10px] mt-[18px]">
                <div className="flex flex-row gap-[8px] items-center ">
                  <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                    <IoLinkSharp className="text-white" />
                  </div>
                  <p className="text-white font-medium">линк куда-то</p>
                </div>
                <div className="flex flex-row gap-[8px] items-center ">
                  <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                    <IoLinkSharp className="text-white" />
                  </div>
                  <p className="text-white font-medium">линк куда-то</p>
                </div>
                <div className="flex flex-row gap-[8px] items-center ">
                  <div className="rounded-[5px] flex items-center justify-center w-[36px] h-[36px]  bg-[#25262F] ">
                    <IoLinkSharp className="text-white" />
                  </div>
                  <p className="text-white font-medium whitespace-pre-wrap">
                    линк куда-то
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* QR CODE */}
          <div className="flex flex-row items-center gap-10 lg:mt-[50px]">
            <div className="border p-5  border-white rounded-[20px]">
              <Image
                width={100}
                alt="qr-code"
                height={100}
                quality={100}
                className="object-cover bg-white rounded-[4px] w-full h-full"
                src="https://ucarecdn.com/7f4bca3e-87c4-4cbf-bf7f-4a869be550ed/-/preview/1000x1000/"
              />
            </div>
          </div>
        </div>

        {/* desktop */}
        <div className="lg:ml-[30px]">
          <div className="w-full ">
            <iframe
              title="Map of House №40, Street Khayaban-e-Iqbal, Islamabad, Pakistan"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3318.586735865929!2d73.03666392560989!3d33.71964102328414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20%E2%84%9640%2C%20Street%20Khayaban-e-Iqbal%2C%20Sector%20F-8%2F3%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sru!2s!4v1742916255118!5m2!1sru!2s"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 h-[250px]"
              allowFullScreen
            />

            <p className="text-white mt-2 text-[14px] underline ">
              House №40, Street Khayaban-e-Iqbal, Sector F-8/3, Islamabad,
              Pakistan
            </p>
          </div>
          <div className="flex flex-col gap-5 md:mt-[40px]">
            <p className="text-[20px] text-white font-medium">
              {t("feedbackTitle")}
            </p>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  value={formData.fullName}
                  onChange={handleChange("fullName")}
                  type="text"
                  required
                  placeholder={t("fullName")}
                  className="rounded-[4px] text-white placeholder:white bg-[#22232C] py-[14px] px-[20px]"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange("email")}
                  placeholder={t("email")}
                  className="rounded-[4px] text-white placeholder:white bg-[#22232C] py-[14px] px-[20px]"
                />
                <button
                  type="submit"
                  className="text-[16px] rounded-[4px] text-white bg-[#427EFF] font-medium text-center h-[50px] hover:bg-[#4255ff]"
                >
                  {sending ? t("sending") : t("send") } 
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-2.5 lg:py-3.5 bg-[#0e0f18f3] px-[20px] border-t-white md:justify-between flex flex-col md:flex-row md:items-center gap-2.5">
        <p className="text-[13px] md:text-[14.2px] text-white">
          Copyright © Ministry of Foreign Affairs. All Rights Reserved
        </p>
        <div className="flex flex-row items-center gap-2.5">
          <p className="text-[13px] md:text-[14.2px] text-white">
            Политика конфиденциальности
          </p>
          <p className="text-[13px] md:text-[14.2px] text-white">
            Публичная оферта 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
