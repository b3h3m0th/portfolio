import path from "path";
import { WorkPost, WorkPostMetadata } from "@/types";
import { remark } from "remark";
import html from "remark-html";
import { parseMDXMetadata, getMDXFiles } from "./utils/mdx";
import { ProjectPost } from "@/types/project";

const postsDirectory = path.join(process.cwd(), "content", "projects");

async function parseProjectMDX(filename: string) {
  const data = await parseMDXMetadata<WorkPostMetadata>(
    path.join(postsDirectory, filename)
  );

  if (!data) return null;

  const contentHtml = await remark().use(html).process(data.content);

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    image: data.image,
    url: (data.url && new URL(data.url)) || null,
    startDate: new Date(data.startDate),
    endDate: (data.endDate && new Date(data.endDate)) || null,
    html: contentHtml.toString(),
    markdown: data.content,
  } as ProjectPost;
}

export async function getProjectPosts() {
  const fileNames = await getMDXFiles(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => await parseProjectMDX(fileName))
  );

  return allPostsData
    .filter((p): p is WorkPost => p !== null)
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}

export async function getProjectPost(id: WorkPost["id"]) {
  return parseProjectMDX(`${id}.mdx`);
}
