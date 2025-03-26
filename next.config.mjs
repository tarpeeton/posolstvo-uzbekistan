import { withNextVideo } from "next-video/process";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        implementation: 'sass-embedded',
      },
    images: {
        domains: ['ucarecdn.com',   'images.unsplash.com'],
    },
};

export default withNextVideo(withNextIntl(nextConfig));