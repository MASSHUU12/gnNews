import { useState } from "react";

import GridItem from "./GridItem";
import ListItem from "./ListItem";
import Description from "@/components/popup/Description";

import { ContentItem } from "@/types";
import { useAppSelector } from "@/hooks";
import { formatISODate } from "@/helpers/time";

/**
 * Component that renders a content item
 * in either a grid or list format based on a preferred display mode.
 *
 * @param {ContentItem} props - The props object containing the data for the content item.
 * @param {string} props.author - The author of the news.
 * @param {string} props.title - The title of the news.
 * @param {string} props.description - The description of the news.
 * @param {string} props.url - The URL of the news.
 * @param {string} props.urlToImage - The URL of the image for the news.
 * @param {string} props.publishedAt - The published date of the news.
 * @param {string} props.content - The content of the news.
 * @returns {JSX.Element}
 */
const ContentItem: React.FunctionComponent<ContentItem> = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}: ContentItem): JSX.Element => {
  const layout = useAppSelector((state) => state.layout.layout);

  const [popupEnabled, setPopupEnabled] = useState(false);

  const togglePopup = (enabled: boolean) => {
    setPopupEnabled(enabled);
  };

  return (
    <>
      <div onClick={() => togglePopup(true)}>
        {layout === "grid" ? (
          <GridItem
            title={title}
            publishedAt={formatISODate(publishedAt)}
            urlToImage={urlToImage}
            description={description}
          />
        ) : (
          <ListItem title={title} publishedAt={formatISODate(publishedAt)} />
        )}
      </div>
      {popupEnabled && (
        <Description
          togglePopup={togglePopup}
          {...{
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          }}
        />
      )}
    </>
  );
};

export default ContentItem;
