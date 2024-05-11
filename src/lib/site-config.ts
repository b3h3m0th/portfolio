import path from "path";
import { readFile } from "fs/promises";
import { SiteConfig } from "./types/site-config";

export async function getSiteConfig() {
  try {
    const filePath = path.join(process.cwd(), "content", "site-config.json");
    const fileContent = await readFile(filePath, "utf8");
    const siteConfig: SiteConfig = await JSON.parse(fileContent);

    return siteConfig;
  } catch {
    return null;
  }
}
