"use client";
import { useState, useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";
import { HiOutlineDocument } from "react-icons/hi2";
import { contactSchema } from "./schema";

export const ContactsMain = () => {
  const t = useTranslations();
  const [openSubject, setOpenSubject] = useState(false);
  const subjectRef = useRef(null);

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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="px-[20px] lg:px-[120px] mt-[24px] pb-[80px] lg:pb-[120px]">
      <div className="flex flex-col lg:flex-row lg:py-[32px] lg:px-[40px] px-[20px] py-[15px] mt-[24px] lg:mt-[48px]">
        <div className="w-full ">
          <h1 className="text-[20px] lg:text-[32px] font-medium">
            {t("contacts_and_form")}
          </h1>
          <p className="mt-[16px] lg:w-[70%] lg:mt-[26px] text-[16px]">
            {t("mfa_hotline")}
          </p>
          <p className="mt-[8px]  text-[16px] lg:text-[24px]">
            +998 71 233-28-28
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-8 w-full lg:max-w-[600px]"
        >
          <input
            {...register("firstName")}
            placeholder={t("first_name")}
            className="border border-[#BDC7CE] text-black placeholder:text-black bg-white px-4 py-3 rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">
              {t(`errors.required.${errors.firstName.message}`)}
            </p>
          )}

          <input
            {...register("lastName")}
            placeholder={t("last_name")}
            className="border border-[#BDC7CE] text-black placeholder:text-black bg-white px-4 py-3 rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">
              {t(`errors.required.${errors.lastName.message}`)}
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

          <button
            type="submit"
            className="bg-[#427EFF]  rounded-[4px] text-white px-4 py-3  hover:opacity-90 transition"
          >
            {t("send")}
          </button>
        </form>
      </div>
    </section>
  );
};
