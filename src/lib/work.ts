import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { WorkPost } from "@/types";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "work");

export async function getWorkPosts() {
  const fileNames = await fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    return {
      id,
      title: matterResult.data.title,
      image: matterResult.data.image,
      date: new Date(matterResult.data.date),
      html: processedContent.toString(),
    } as WorkPost;
  });

  return (await Promise.all(allPostsData)).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
}
