import path from "path";
import { Work, WorkMetadata } from "@/types";
import { remark } from "remark";
import html from "remark-html";
import { parseMDXMetadata, getMDXFiles } from "./utils/mdx";

const postsDirectory = path.join(process.cwd(), "content", "work");

async function parseWorkMDX(filename: string) {
  const data = await parseMDXMetadata<WorkMetadata>(
    path.join(postsDirectory, filename)
  );

  if (!data) return null;

  const contentHtml = await remark().use(html).process(data.content);

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    company: data.company,
    image: data.image,
    url: (data.url && new URL(data.url)) || null,
    startDate: new Date(data.startDate),
    endDate: (data.endDate && new Date(data.endDate)) || null,
    html: contentHtml.toString(),
    markdown: data.content,
    tags: data.tags,
  } as Work;
}

export async function getWorks() {
  const fileNames = await getMDXFiles(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => await parseWorkMDX(fileName))
  );

  return allPostsData
    .filter((p): p is Work => p !== null)
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}

export async function getWork(id: Work["id"]) {
  return parseWorkMDX(`${id}.mdx`);
}
