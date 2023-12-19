import { Metadata } from "./metadata";

export type ProjectPostMetadata = {
  title: string;
  description?: string;
  url?: URL;
  startDate: Date;
  endDate?: Date;
  image?: string;
} & Metadata;

export type ProjectPost = ProjectPostMetadata & {
  html: string;
  markdown: string;
};
