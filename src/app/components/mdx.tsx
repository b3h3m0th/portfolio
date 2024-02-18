import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Suspense } from "react";

const components: MDXComponents = {
  img: ({ alt, ...props }: any) => (
    <Image
      className="w-full h-auto"
      alt={props?.alt ?? ""}
      {...props}
      width={props?.width ?? 500}
      height={props?.height ?? 0}
    />
  ),
  Image: Image,
  a: (props: any) => <a {...props} target="_blank"></a>,
};

export function MDX(props: MDXRemoteProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(components || {}) }}
      />
    </Suspense>
  );
}
