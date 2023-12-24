import { Metadata } from "./metadata";

export type ProjectMetadata = {
  title: string;
  description?: string;
  sourceCode?: URL;
  startDate: Date;
  endDate?: Date;
  image?: string;
} & Metadata;

export type Project = ProjectMetadata & {
  html: string;
  markdown: string;
};
