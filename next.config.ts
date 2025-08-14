import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'report-sample' blob: https://saiddifferently.node.brainvire.dev https://saidword.brainvire.dev https://admin.saiddifferently.com https://saiddifferently.com https://cdn.saiddifferently.com https://sdtalentportal.demo.brainvire.dev;
    script-src-elem 'unsafe-inline' 'self' https://www.googletagmanager.com https://www.google.com/recaptcha/api.js https://www.gstatic.com/ https://saiddifferently.com https://cdn.saiddifferently.com https://maps.googleapis.com;
    style-src 'self' 'unsafe-inline' 'report-sample' https://saiddifferently.com https://cdn.saiddifferently.com;
    img-src 'self' blob: data: https://saiddifferently.node.brainvire.dev https://saiddifferently.wp.brainvire.dev https://saidword.brainvire.dev https://admin.saiddifferently.com https://saiddifferently.com https://www.googletagmanager.com https://www.google.co.in https://cdn.saiddifferently.com https://sdtalentportal.demo.brainvire.dev https://maps.googleapis.com https://maps.gstatic.com;
    font-src 'self' https://saiddifferently.com https://cdn.saiddifferently.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    frame-src 'self' https://player.vimeo.com https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com;
    media-src 'self' blob: data: * https://saiddifferently.node.brainvire.dev https://saiddifferently.wp.brainvire.dev https://saidword.brainvire.dev https://admin.saiddifferently.com https://saiddifferently.com https://cdn.saiddifferently.com;
    connect-src 'self' https://saiddifferently.node.brainvire.dev https://saiddifferently.wp.brainvire.dev https://saidword.brainvire.dev https://admin.saiddifferently.com https://saiddifferently.com https://www.google.co.in https://analytics.google.com https://stats.g.doubleclick.net https://cdn.saiddifferently.com https://sdtalentportal.demo.brainvire.dev https://maps.googleapis.com;
`;


const isProd = process.env.APP_ENV === "production";

const nextConfig = {
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
  assetPrefix: isProd ? "https://cdn.saiddifferently.com" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "saiddifferently.node.brainvire.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "saiddifferently.wp.brainvire.dev",
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
        hostname: "admin.saiddifferently.com",
        port: "",
        pathname: "/**",
      }
    ],
  },

};

export default nextConfig;
