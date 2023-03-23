import { formatISODate } from "../../../helpers/time";
import { ContentItem } from "../../../types";
import GridItem from "./GridItem";
import ListItem from "./ListItem";

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
}): JSX.Element => {
  const preferredGrid = true;

  return (
    <div>
      {preferredGrid ? (
        <GridItem
          title={title}
          publishedAt={formatISODate(publishedAt)}
          urlToImage={urlToImage}
        />
      ) : (
        <ListItem title={title} publishedAt={formatISODate(publishedAt)} />
      )}
    </div>
  );
};

export default ContentItem;
