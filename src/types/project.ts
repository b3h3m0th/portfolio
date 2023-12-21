import { Metadata } from "./metadata";

export enum ProjectTag {
  "design" = "design",
  "development" = "development",
}

export type ProjectPostMetadata = {
  title: string;
  description?: string;
  sourceCode?: URL;
  startDate: Date;
  endDate?: Date;
  image?: string;
  tags?: ProjectTag[];
} & Metadata;

export type ProjectPost = ProjectPostMetadata & {
  html: string;
  markdown: string;
};
