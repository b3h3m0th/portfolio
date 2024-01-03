import path from "path";
import { remark } from "remark";
import html from "remark-html";
import { parseMDXMetadata, getMDXFiles } from "@/lib/utils";
import { Project, ProjectMetadata } from "@/lib/types/project";

const postsDirectory = path.join(process.cwd(), "content", "projects");

async function parseProjectMDX(filename: string) {
  const data = await parseMDXMetadata<ProjectMetadata>(
    path.join(postsDirectory, filename)
  );

  if (!data) return null;

  const contentHtml = await remark().use(html).process(data.content);

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    sourceCode: (data.sourceCode && new URL(data.sourceCode)) || null,
    startDate: new Date(data.startDate),
    endDate: (data.endDate && new Date(data.endDate)) || null,
    html: contentHtml.toString(),
    markdown: data.content,
  } as Project;
}

export async function getProjects() {
  const fileNames = await getMDXFiles(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => await parseProjectMDX(fileName))
  );

  return allPostsData
    .filter((p): p is Project => p !== null)
    .sort((a, b) => b.startDate.getTime() - a.startDate?.getTime());
}

export async function getProject(id: Project["id"]) {
  return parseProjectMDX(`${id}.mdx`);
}
