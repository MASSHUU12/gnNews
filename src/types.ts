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
  description: string | null;
} & ListItem;

export type News = ContentItem[];

type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type NewsAPIResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};
