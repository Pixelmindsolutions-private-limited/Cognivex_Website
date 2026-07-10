/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
  allowedDevOrigins: ["*", "192.168.1.22"],  
};

export default nextConfig;