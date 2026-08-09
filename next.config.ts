import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are small, pre-sized local statics — the optimizer adds cost for no gain.
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/paris-ai-safety",
        destination:
          "https://docs.google.com/document/d/1pudXgEO4gQ_OvGl_8luk3sR2nS0VEclmfSpUDKXYUIE/edit?tab=t.0",
        permanent: false,
      },
      {
        source: "/cv",
        destination:
          "https://drive.google.com/file/d/1T7JMnWyBQQzVCFN4nMQgf_8c9qMLv_tj/view?usp=sharing",
        permanent: false,
      },
      {
        source: "/hire-me",
        destination:
          "https://www.notion.so/lucieworkinghard/Hire-me-Lucie-2d1baaa52195801a80b0dd4def8a1ce9",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
