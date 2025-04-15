"use client";
import { useState, useRef, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { contactSchema } from "./schema";
import { Axios } from "@/utils/api";
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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





   const onSubmit = async (data) => {
     const formData = new FormData();
 
     formData.append("full_name", data.full_name);
     formData.append("email", data.email);
     formData.append("phone_number", data.phone);
     formData.append("message", data.message);
 
     try {
       await Axios.post("send-message", formData);
       toast.success(t("toast.success"));
     } catch (error) {
       console.error("Sending failed:", error);
       toast.error(t("toast.error"));
     }
   };

  return (
    <section className="px-[20px] lg:px-[120px] mt-[24px] pb-[80px] lg:pb-[120px]">
                <ToastContainer position="top-right" autoClose={4200} />
      
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
            {...register("full_name")}
            placeholder={t("full_name")}
            className="border border-[#BDC7CE] text-black placeholder:text-black bg-white px-4 py-3 rounded"
          />
          {errors.full_name && (
            <p className="text-red-500 text-sm">
              {t(`errors.required.${errors.full_name.message}`)}
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
