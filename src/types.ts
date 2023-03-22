export type ContentItem = {
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export type ListItem = {
  title: string;
  publishedAt: string;
};

export type GridItem = {
  urlToImage: string | null;
} & ListItem;

export type News = ContentItem[];
