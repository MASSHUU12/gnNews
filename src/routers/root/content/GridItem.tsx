import { GridItem } from "../../../types";

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
