import type { NextConfig } from "next";

// The sibling landing sites redirect /download to the right store and serve
// an apple-app-site-association file. Neither is here: no store listing exists
// yet, and the app declares no App Links intent filter or associated domain,
// so either file would assert something the app does not claim.
const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/", destination: "/ko", permanent: false }];
  },
  agentRules: false,
};

export default nextConfig;
