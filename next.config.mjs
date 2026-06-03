/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'perenual.com',
      },
   
         {
        protocol: "https",
        hostname: "s3.us-central-1.wasabisys.com",
      },
    ],
  },
};

export default nextConfig;