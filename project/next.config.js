/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["art-holding.su", "zovofficial.com", "zovrus.ru"],
  },
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "art-holding.su",
  //     port: "",
  //     pathname: "/**",
  //   },
  //   {
  //     protocol: "https",
  //     hostname: "zovofficial.com",
  //     port: "",
  //     pathname: "/**",
  //   },
  //   {
  //     protocol: "https",
  //     hostname: "zovrus.ru",
  //     port: "",
  //     pathname: "/**",
  //   },
  // ],
  experimental: {},
};

module.exports = nextConfig;
