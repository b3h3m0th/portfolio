import { useEffect, useState } from "react";
import { SiteConfig } from "../../lib/types";

export function useSiteConfig() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>();

  useEffect(() => {
    fetch("/api/site-config")
      .then((c) => c.json())
      .then((c: SiteConfig | null) => {
        if (c) setSiteConfig(c);
      });
  }, []);

  return siteConfig;
}
