"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/non-auto").then(() => {
      if (typeof window !== 'undefined' && window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  }, [path]);

  return null;
}
