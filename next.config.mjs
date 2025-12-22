/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' ? 'https://aelerinya.me' : 'http://localhost:3000',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/paris-ai-safety',
        destination: 'https://docs.google.com/document/d/1pudXgEO4gQ_OvGl_8luk3sR2nS0VEclmfSpUDKXYUIE/edit?tab=t.0',
        permanent: false,
      },
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/1nz40S6SgdVnkWwirRkoGJ-BSjZ3UItnO/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/hire-me',
        destination: 'https://www.notion.so/lucieworkinghard/Hire-me-Lucie-2d1baaa52195801a80b0dd4def8a1ce9',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
