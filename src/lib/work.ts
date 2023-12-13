import path from "path";
import { WorkPost, WorkPostMetadata } from "@/types";
import { remark } from "remark";
import html from "remark-html";
import { getMDXData, getMDXFiles } from "./utils/mdx";

const postsDirectory = path.join(process.cwd(), "content", "work");

export async function getWorkPosts() {
  const fileNames = await getMDXFiles(postsDirectory);
  const allPostsData = fileNames.map(async (fileName) => {
    const data = await getMDXData<WorkPostMetadata>(
      path.join(postsDirectory, fileName)
    );

    const contentHtml = await remark().use(html).process(data.content);

    return {
      id: data.id,
      title: data.title,
      image: data.image,
      url: (data.url && new URL(data.url)) || null,
      startDate: new Date(data.startDate),
      endDate: (data.endDate && new Date(data.endDate)) || null,
      html: contentHtml.toString(),
    } as WorkPost;
  });

  return (await Promise.all(allPostsData)).sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );
}
