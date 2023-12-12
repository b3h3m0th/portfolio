export type WorkPostMetadata = {
  title: string;
  date: Date;
  image?: string;
};

export type WorkPost = WorkPostMetadata & { id: string; html: string };
