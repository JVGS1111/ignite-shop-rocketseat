/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.stripe.com",
        pathname: "/links/*",
        port: ""
      }
    ]
  }
};

export default nextConfig;
