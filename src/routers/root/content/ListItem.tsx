import { ListItem } from "../../../types";

/**
 * Component that renders a list item
 * for a given item in the format defined by the `ListItem` type.
 *
 * @param {ListItem} props - The props object containing the data for the list item.
 * @param {string} props.title - The title of the list item.
 * @param {string} props.publishedAt - The published date of the list item.
 * @returns {JSX.Element}
 */
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
