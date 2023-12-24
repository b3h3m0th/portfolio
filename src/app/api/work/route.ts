import { getWorks } from "@/lib";

export async function GET(request: Request) {
  const works = await getWorks();

  return Response.json(works);
}
