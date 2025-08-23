import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'report-sample' blob: https://xpel-demo.vercel.app.brainvire.dev https://saidword.brainvire.dev https://admin.xpel-demo.vercel.app https://xpel-demo.vercel.app https://cdn.xpel-demo.vercel.app https://sdtalentportal.demo.brainvire.dev;
    script-src-elem 'unsafe-inline' 'self' https://www.googletagmanager.com https://www.google.com/recaptcha/api.js https://www.gstatic.com/ https://xpel-demo.vercel.app https://cdn.xpel-demo.vercel.app https://maps.googleapis.com;
    style-src 'self' 'unsafe-inline' 'report-sample' https://xpel-demo.vercel.app https://cdn.xpel-demo.vercel.app;
    img-src 'self' blob: data: https://xpel-demo.vercel.app.brainvire.dev https://xpel-demo.vercel.app.brainvire.dev https://saidword.brainvire.dev https://admin.xpel-demo.vercel.app https://xpel-demo.vercel.app https://www.googletagmanager.com https://www.google.co.in https://cdn.xpel-demo.vercel.app https://sdtalentportal.demo.brainvire.dev https://maps.googleapis.com https://maps.gstatic.com;
    font-src 'self' https://xpel-demo.vercel.app https://cdn.xpel-demo.vercel.app;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    frame-src 'self' https://player.vimeo.com https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com;
    media-src 'self' blob: data: * https://xpel-demo.vercel.app.brainvire.dev https://xpel-demo.vercel.app.brainvire.dev https://saidword.brainvire.dev https://admin.xpel-demo.vercel.app https://xpel-demo.vercel.app https://cdn.xpel-demo.vercel.app;
    connect-src 'self' https://xpel-demo.vercel.app.brainvire.dev https://xpel-demo.vercel.app.brainvire.dev https://saidword.brainvire.dev https://admin.xpel-demo.vercel.app https://xpel-demo.vercel.app https://www.google.co.in https://analytics.google.com https://stats.g.doubleclick.net https://cdn.xpel-demo.vercel.app https://sdtalentportal.demo.brainvire.dev https://maps.googleapis.com;
`;


const isProd = process.env.APP_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    // Only apply CSP in production to avoid blocking local development
    if (isProd) {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
    }
    return [];
  },
  ...(isProd && { assetPrefix: "https://cdn.xpel-demo.vercel.app" }),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xpel-demo.vercel.app.brainvire.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "xpel-demo.vercel.app.brainvire.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "saidword.brainvire.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.xpel-demo.vercel.app",
        port: "",
        pathname: "/**",
      }
    ],
  },

};

export default nextConfig;
