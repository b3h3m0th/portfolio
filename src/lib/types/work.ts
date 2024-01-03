import { Metadata } from "./metadata";

export enum WorkTag {
  "design" = "design",
  "development" = "development",
}

export type WorkMetadata = {
  title: string;
  description?: string;
  company?: string;
  url?: URL;
  startDate: Date;
  endDate?: Date;
  image?: string;
  tags?: WorkTag[];
} & Metadata;

export type Work = WorkMetadata & { html: string; markdown: string };
