import { Metadata } from "./metadata";

export enum WorkTag {
  "design" = "design",
  "development" = "development",
}

export type WorkPostMetadata = {
  title: string;
  description?: string;
  company?: string;
  url?: URL;
  startDate: Date;
  endDate?: Date;
  image?: string;
  tags?: WorkTag[];
} & Metadata;

export type WorkPost = WorkPostMetadata & { html: string; markdown: string };
