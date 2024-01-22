/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "art-holding.su",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "zovofficial.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "zovrus.ru",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.yandexcloud.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lumen-image-bucket.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {},
};

module.exports = nextConfig;
