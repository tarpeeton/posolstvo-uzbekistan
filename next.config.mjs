import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  images: {
    domains: [
      "ucarecdn.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "95.182.118.106",
      "api.pakistan.money-manager.uz",
      "api.pakistan.money-manager.uz",
    ],
  },
};

export default withNextVideo(withNextIntl(nextConfig));
