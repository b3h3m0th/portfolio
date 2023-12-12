export type WorkPostMetadata = {
  title: string;
  url?: URL;
  startDate: Date;
  endDate?: Date;
  image?: string;
};

export type WorkPost = WorkPostMetadata & { id: string; html: string };
