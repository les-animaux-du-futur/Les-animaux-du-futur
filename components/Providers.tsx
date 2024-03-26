"use client";

import { nhost } from "@/lib/nhostClient";
import { NhostProvider } from "@nhost/nextjs";
import { PropsWithChildren } from "react";

interface ProvidersProps extends PropsWithChildren {}

export function Providers({ children }: ProvidersProps) {
  return <NhostProvider nhost={nhost}>{children}</NhostProvider>;
}
