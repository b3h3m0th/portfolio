import { Metadata } from "./metadata";

export type WorkPostMetadata = {
  title: string;
  description?: string;
  company?: string;
  url?: URL;
  startDate: Date;
  endDate?: Date;
  image?: string;
} & Metadata;

export type WorkPost = WorkPostMetadata & { html: string; markdown: string };
