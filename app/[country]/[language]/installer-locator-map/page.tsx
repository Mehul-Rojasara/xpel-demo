"use client";

import dynamic from "next/dynamic";

// dynamically import your map (client only)
const InstallerMap = dynamic(
  () => import("../../../../components/sections/InstallerLocatorMap"),
  { ssr: false }
);

export default function InstallerLocatorClient() {
  return <InstallerMap />;
}
