"use client";
import { useState, useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { Breadcrumb } from "@/ui/breadcrumb";
import { HiOutlineDocument } from "react-icons/hi2";
import { contactSchema } from "./schema";
import { IoIosArrowDown } from "react-icons/io";
import { Axios } from "@/utils/api";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const THEME = [
  {
    id: "#@application",
    name: {
      ru: "Заявка на участие в программе послов",
      uz: "Elchilar dasturida ishtirok etish uchun ariza",
      en: "Application for Ambassador Program",
      ur: "سفیر پروگرام میں شرکت کی درخواست",
    },
  },
  {
    id: "#@documents",
    name: {
      ru: "Документы и требования",
      uz: "Hujjatlar va talablar",
      en: "Documents and Requirements",
      ur: "دستاویزات اور تقاضے",
    },
  },
  {
    id: "#@interview",
    name: {
      ru: "Собеседование и этапы отбора",
      uz: "Suhbat va tanlov bosqichlari",
      en: "Interview and Selection Stages",
      ur: "انٹرویو اور انتخاب کے مراحل",
    },
  },
];

export const ContactAmbassadorMain = () => {
  const t = useTranslations();
  const [openSubject, setOpenSubject] = useState(false);
  const subjectRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [selectedSubject, setSelectedSubject] = useState({
    ru: "",
    uz: "",
    en: "",
    ur: "",
    id: "",
  });
  const locale = useLocale();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (subjectRef.current && !subjectRef.current.contains(event.target)) {
        setOpenSubject(false);
      }
    };

    if (openSubject) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSubject]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });



  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("full_name", data.full_name);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone);
    formData.append("message", data.message);
    formData.append("topic", selectedSubject[locale] || "");

   if (selectedFile) {
  formData.append("file", selectedFile);
}


    try {
      await Axios.post("send-message", formData);
      toast.success(t("toast.success"));
    } catch (error) {
      console.error("Sending failed:", error);
      toast.error(t("toast.error"));
    }
  };

  const handleOpenSubject = () => setOpenSubject(!openSubject);

  return (
    <section className="px-[20px] lg:px-[120px] mt-[24px] pb-[80px] lg:pb-[120px]">
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
              ru: "Связь с послом",
              uz: "Elchi bilan aloqa",
              en: "Contact with the Ambassador",
              ur: "سفیر سے رابطہ",
            },
            isCurrent: true,
          },
        ]}
      />

      <div className="flex flex-col lg:flex-row lg:py-[32px] lg:px-[40px] px-[20px] bg-[#DEDEE280] py-[15px] mt-[24px] lg:mt-[48px]">
        <div className="w-full ">
          <ToastContainer position="top-right" autoClose={4000} />
          <h1 className="text-[20px] lg:text-[32px] font-medium">
            {t("contact_with_ambassador")}
          </h1>
          <p className="mt-[16px] lg:mt-[26px] text-[16px]">
            {t("write_or_ask_ambassador")}
          </p>
          <p className="mt-[8px] text-[#006FFF] text-[16px] lg:text-[24px]">
            uzbekembassy@gmail.com
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-8 w-full lg:max-w-[600px]"
        >
          <input
            {...register("fullName")}
            placeholder={t("full_name")}
            className="border border-[#BDC7CE] text-black placeholder:text-black bg-white px-4 py-3 rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">
              {t(`errors.required.${errors.fullName.message}`)}
            </p>
          )}

          <input
            {...register("email")}
            placeholder="maria@gmail.com"
            className="border border-[#BDC7CE] text-black placeholder:text-black bg-white px-4 py-3 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {t(`errors.required.${errors.email.message}`)}
            </p>
          )}

          <input
            {...register("phone")}
            placeholder={t("phone_number")}
            className="border text-black placeholder:text-black border-[#BDC7CE] bg-white px-4 py-3 rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {t(`errors.required.${errors.phone.message}`)}
            </p>
          )}
          <div ref={subjectRef} className="w-full flex flex-col gap-[10px]">
            <button
              type="button"
              onClick={handleOpenSubject}
              className={`border w-full cursor-pointer flex flex-row items-center justify-between text-[#000000] border-[#BDC7CE] bg-white px-4 py-3 rounded `}
            >
              {selectedSubject[locale] || t("subject")}

              <IoIosArrowDown className={`${openSubject && "rotate-180"}`} />
            </button>
            {openSubject && (
              <div className="flex flex-col gap-2.5">
                {THEME.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() =>
                      setSelectedSubject({ ...sub.name, id: sub.id })
                    }
                    type="button"
                    className="border cursor-pointer
                 text-black placeholder:text-black
                  border-[#BDC7CE]
                  bg-white px-4 py-3 rounded"
                  >
                    {sub.name[locale]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <textarea
            {...register("message")}
            placeholder={t("your_message")}
            className="border border-[#BDC7CE] text-black placeholder:text-black bg-white px-4 py-3 rounded min-h-[120px]"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">
              {t(`errors.required.${errors.message.message}`)}
            </p>
          )}

          <label className="cursor-pointer bg-white flex flex-row items-center justify-center gap-2 border rounded-[4px] border-dashed border-[#006FFF] px-4 py-6 text-center text-[#006FFF]">
            {fileName || t("attach_file")}
            <HiOutlineDocument className="lg:w-[20px] lg:h-[20px]" />
           <input
  type="file"
  className="hidden"
  {...register("file")}
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file); 
    } else {
      setFileName("");
      setSelectedFile(null);
    }
  }}
/>

          </label>

          <button
            type="submit"
            className="bg-[#427EFF]  cursor-pointer rounded-[4px] text-white px-4 py-3  hover:opacity-90 transition"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </section>
  );
};
