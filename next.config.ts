import type { NextConfig } from "next";

/**
 * Web3Forms runs in the browser on the free tier. Next only embeds `NEXT_PUBLIC_*` in the client
 * bundle. If Vercel only has `WEB3FORMS_ACCESS_KEY` (no NEXT_PUBLIC_ duplicate), map it here at
 * build time so one env var is enough.
 */
const web3formsKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
  process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
  "";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: web3formsKey,
  },
};

export default nextConfig;
