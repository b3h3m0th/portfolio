import { getSiteConfig } from "@/lib";

export async function GET(request: Request) {
  const siteConfig = await getSiteConfig();

  return Response.json(siteConfig);
}
