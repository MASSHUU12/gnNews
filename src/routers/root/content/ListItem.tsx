import { ListItem } from "../../../types";

const ListItem: React.FunctionComponent<ListItem> = ({
  title,
  publishedAt,
}): JSX.Element => {
  return (
    <div className="list-item">
      <h3>{title}</h3>
      <span>{publishedAt}</span>
    </div>
  );
};

export default ListItem;
