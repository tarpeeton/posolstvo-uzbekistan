import type React from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/_components/Header/Header"
import { Footer } from "@/_components/Footer/Footer"
const inter = Inter({ subsets: ["latin", "cyrillic"] })

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "uz" }]
}


export const metadata = {
  icons: {
    icon: "https://ucarecdn.com/28342f11-67d7-4679-9acc-ed57c118d796/-/preview/45x45/",
  },
}


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

   const { locale } = await params;

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
           <Header />
            {children}
            <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

