import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import { ListItem as Item } from "@/types";

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
  const [play, setPlay] = useState(false);

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
      className="list-item"
      onMouseOver={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      <h3>{title}</h3>
      <h4>{publishedAt}</h4>
    </animated.div>
  );
};

export default ListItem;
