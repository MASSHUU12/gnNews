export type ContentItem = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type ListItem = {
  title: string;
  publishedAt: string;
};

export type GridItem = {
  urlToImage: string;
} & ListItem;

export type News = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}[];
