import { Metadata } from "@/types";
import { readFile, readdir } from "fs/promises";
import path from "path";

export async function getMDXFiles(directory: string) {
  const files = await readdir(directory);
  return files.filter((f) => path.extname(f) === ".mdx");
}

export async function getMDXFile(path: string) {
  return readFile(path, "utf8");
}

export async function getMDXData<T extends Metadata>(filePath: string) {
  const fileContent = await readFile(filePath, "utf8");
  const frontmatterSeparator = "---";
  const metadataString = fileContent?.split(frontmatterSeparator)?.[1];
  const content = fileContent.slice(
    metadataString?.length + frontmatterSeparator.length * 2
  );
  const frontMatterLines = metadataString?.split("\n");
  const metadata: Partial<T> = {};

  frontMatterLines?.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof T] = value as T[keyof T];
  });

  if (!metadata.id) {
    metadata.id = path.parse(filePath).name;
  }

  return { ...(metadata as T), content };
}
