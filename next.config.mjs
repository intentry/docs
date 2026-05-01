import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // output: "standalone" removed - OpenNext Cloudflare handles bundling
};

export default withMDX(config);

// Only start the Cloudflare dev proxy in development mode.
if (process.env.NODE_ENV === "development") {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}
