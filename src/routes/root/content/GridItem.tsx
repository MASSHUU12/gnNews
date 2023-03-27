import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";

import { GridItem as Grid } from "@/types";

/**
 * Component that renders a grid item for a given item
 * in the format defined by the `GridItem` type.
 *
 * @param {Grid} props - The props object containing the data for the grid item.
 * @param {string} props.title - The title of the grid item.
 * @param {string} props.publishedAt - The published date of the grid item.
 * @param {string} props.urlToImage - The URL of the image for the grid item.
 * @returns {JSX.Element}
 */
const GridItem: React.FunctionComponent<Grid> = ({
  title,
  publishedAt,
  urlToImage,
  description,
}: Grid): JSX.Element => {
  const [play, setPlay] = useState(false);
  const { t } = useTranslation();

  const hoverAnimation = useSpring({
    from: {
      scale: 1,
    },
    to: {
      scale: 1.02,
    },
    reverse: !play,
  });

  return (
    <animated.div
      style={hoverAnimation}
      className="grid-item"
      onMouseOver={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      <h3>{title}</h3>
      {description && <h4>{description}</h4>}
      <h5>{publishedAt}</h5>
      <div className="grid-item-image">
        <img
          src={!urlToImage ? "/no_image.svg" : urlToImage}
          alt={t("article_picture") as string}
        />
      </div>
    </animated.div>
  );
};

export default GridItem;
