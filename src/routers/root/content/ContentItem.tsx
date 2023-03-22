import { formatISODate } from "../../../helpers/time";
import { ContentItem } from "../../../types";
import GridItem from "./GridItem";
import ListItem from "./ListItem";

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
