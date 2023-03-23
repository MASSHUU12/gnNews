import { ListItem as Item } from "../../../types";

/**
 * Component that renders a list item
 * for a given item in the format defined by the `ListItem` type.
 *
 * @param {List} props - The props object containing the data for the list item.
 * @param {string} props.title - The title of the list item.
 * @param {string} props.publishedAt - The published date of the list item.
 * @returns {JSX.Element}
 */
const ListItem: React.FunctionComponent<Item> = ({
  title,
  publishedAt,
}: Item): JSX.Element => {
  return (
    <div className="list-item">
      <h3>{title}</h3>
      <h4>{publishedAt}</h4>
    </div>
  );
};

export default ListItem;
