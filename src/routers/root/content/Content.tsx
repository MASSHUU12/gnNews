import { useEffect } from "react";
import { setNews } from "../../../features/news/newsSlice";
import { useAppDispatch } from "../../../hooks";
import "./Content.scss";
import ContentItem from "./ContentItem";

const Content: React.FunctionComponent<any> = (props): JSX.Element => {
  const dispatch = useAppDispatch();

  const testData = [
    {
      author: "Andrea Blanco",
      title:
        "Gwyneth Paltrow trial - live: Ski crash witness says star 'bolted' as Apple, Moses and Brad Falchuk to testify - The Independent",
      description:
        "Goop founder faces civil lawsuit regarding 2016 skiing accident involving retired optometrist Terry Sanderson at Deer Valley resort",
      url: "https://www.independent.co.uk/news/world/americas/gwyneth-paltrow-ski-trial-kids-brad-b2305628.html",
      urlToImage:
        "https://static.independent.co.uk/2023/03/21/15/terry%20sanderson%20gwyneth%20paltrow.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-03-22T07:42:11Z",
      content:
        "Who is plaintiff Terry Sanderson?\r\nA 76-year-old retired optometrist is suing actor-turned-lifestyle influencer Gwyneth Paltrow after he claims she struck him in a hit-and-run ski crash seven years a…",
    },
    {
      author: "Andrea Blanco",
      title:
        "Gwyneth Paltrow trial - live: Ski crash witness says star 'bolted' as Apple, Moses and Brad Falchuk to testify - The Independent",
      description:
        "Goop founder faces civil lawsuit regarding 2016 skiing accident involving retired optometrist Terry Sanderson at Deer Valley resort",
      url: "https://www.independent.co.uk/news/world/americas/gwyneth-paltrow-ski-trial-kids-brad-b2305628.html",
      urlToImage:
        "https://static.independent.co.uk/2023/03/21/15/terry%20sanderson%20gwyneth%20paltrow.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-03-22T07:42:11Z",
      content:
        "Who is plaintiff Terry Sanderson?\r\nA 76-year-old retired optometrist is suing actor-turned-lifestyle influencer Gwyneth Paltrow after he claims she struck him in a hit-and-run ski crash seven years a…",
    },
  ];

  useEffect(() => {
    dispatch(setNews(testData));
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
