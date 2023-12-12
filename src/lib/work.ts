import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

const postsDirectory = path.join(process.cwd(), "content", "work");

export async function getWorkPosts() {
  const fileNames = await fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    } as Metadata & { id: string };
  });

  return allPostsData.sort(
    (a: any, b: any) => a.date.getTime() - b.date.getTimer()
  );
}
