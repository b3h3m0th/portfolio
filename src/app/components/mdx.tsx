import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MDXRemoteProps } from "next-mdx-remote/rsc";

const components: MDXComponents = {
  img: ({ alt, ...props }: any) => (
    <Image
      style={{ width: "100%", height: "auto" }}
      alt={props?.alt ?? ""}
      {...props}
      width={500}
      height={0}
    />
  ),
};

export function MDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(components || {}) }}
    />
  );
}
