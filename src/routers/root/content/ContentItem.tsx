import { formatISODate } from "../../../helpers/time";
import { ContentItem } from "../../../types";
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
  return (
    <div>
      <ListItem title={title} publishedAt={formatISODate(publishedAt)} />
    </div>
  );
};

export default ContentItem;
