"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import {  ru  , enGB , uz } from "date-fns/locale";
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/ui/button"
import { useLocale } from "next-intl";
import { GrFormNextLink , GrFormPreviousLink } from "react-icons/gr";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const locale = useLocale()
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={locale === 'ru' ? ru : locale === 'uz' ? uz : enGB}
      className={cn("p-3 w-full", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2 w-full ",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "default" }),
          "size-7 bg-inherit shadow-none rounded-none hover:bg-inherit"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-4",
        head_row: "flex gap-[8px] md:gap-[15px] lg:gap-[21px]",
        head_cell:
          "text-muted-foreground w-8 font-normal text-[0.8rem]",
        row: "flex w-full gap-[8px] md:gap-[15px] lg:gap-[21px] mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-[#006FFF] aria-selected:text-white",
        day_range_end:
          "day-range-end aria-selected:bg-[#006FFF] aria-selected:text-white",
        day_selected:
          "bg-[#006FFF] text-white font-medium rounded-[4px]",
        day_today: "bg-[#006FFF] text-white font-medium rounded-[4px]",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-white",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-[#5790db] aria-selected:text-white",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <GrFormPreviousLink className={cn("size-6 text-black", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <GrFormNextLink className={cn("size-6 text-black", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}

export { Calendar }
