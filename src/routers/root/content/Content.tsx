import { useEffect } from "react";
import { setNews } from "../../../features/news/newsSlice";
import { useAppDispatch } from "../../../hooks";
import "./Content.scss";
import ContentItem from "./ContentItem";

import testData from "./TestData.json";

/**
 * Components that displays a list of news articles.
 *
 * @returns {JSX.Element}
 */
const Content: React.FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useAppDispatch();

  // Sets news data in the store.
  useEffect(() => {
    if (import.meta.env.VITE_USE_API === "false") dispatch(setNews(testData));
  });

  return (
    <div className="content-container">
      {testData.map((item, index) => {
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
