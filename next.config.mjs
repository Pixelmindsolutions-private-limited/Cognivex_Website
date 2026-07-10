/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
  allowedDevOrigins: ['*', "192.168.1.22"],
  output: "export",
};

export default nextConfig;