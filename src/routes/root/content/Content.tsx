import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { setNews } from "../../../features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import "./Content.scss";
import ContentItem from "./ContentItem";

import testData from "./TestData.json";
import { News, NewsAPIResponse } from "../../../types";

/**
 * Components that displays a list of news articles.
 *
 * @returns {JSX.Element}
 */
const Content: React.FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const targetCountry = useAppSelector((state) => state.news.targetCountry);
  const data = useAppSelector((state) => state.news.news);

  // Sets news data in the store.
  useEffect(() => {
    if (import.meta.env.VITE_USE_API === "false") {
      targetCountry != "" && dispatch(setNews(testData));
    } else {
      if (targetCountry != "") {
        fetch(
          `https://newsapi.org/v2/top-headlines?country=${targetCountry}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        ).then((response) => {
          response.json().then((data: NewsAPIResponse) => {
            let news: News = [];
            data.articles.map((article) => {
              news.push(article);
            });
            dispatch(setNews(news));
          });
        });
      }
    }
  }, [targetCountry]);

  return (
    <div className="content-container">
      {data.map((item, index) => {
        return (
          <ContentItem
            key={index}
            author={item.author}
            title={item.title}
            description={item.description}
            url={item.url}
            urlToImage={item.urlToImage}
            publishedAt={item.publishedAt}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default Content;
