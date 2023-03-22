import { GridItem } from "../../../types";

/**
 * Component that renders a grid item for a given item
 * in the format defined by the `GridItem` type.
 *
 * @param {GridItem} props - The props object containing the data for the grid item.
 * @param {string} props.title - The title of the grid item.
 * @param {string} props.publishedAt - The published date of the grid item.
 * @param {string} props.urlToImage - The URL of the image for the grid item.
 * @returns {JSX.Element}
 */
const GridItem: React.FunctionComponent<GridItem> = ({
  title,
  publishedAt,
  urlToImage,
}): JSX.Element => {
  return (
    <div className="grid-item">
      <h3>{title}</h3>
      <span>{publishedAt}</span>
      <div className="grid-item-image">
        <img src={urlToImage} alt="Picture from the article" />
      </div>
    </div>
  );
};

export default GridItem;
