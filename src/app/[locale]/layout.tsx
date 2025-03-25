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

