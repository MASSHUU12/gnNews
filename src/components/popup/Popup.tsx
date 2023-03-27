import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import Scroll from "@/helpers/scroll";
import { TogglePopup } from "@/interfaces";

import "./Popup.scss";

interface Props extends TogglePopup {
  title: string;
  children?: any;
}

/**
 * General popup component
 *
 * @param {*} props
 * @return {*}  {JSX.Element}
 */
const Popup: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const [revert, setRevert] = useState(false);

  useEffect(() => {
    Scroll.disable();
  }, []);

  const animation = {
    from: {
      x: window.innerWidth,
    },
    to: {
      x: 0,
    },
  };

  const bgAnimation = useSpring({
    ...animation,
    reverse: revert,
    onRest: () => {
      revert && (props.togglePopup(false), Scroll.enable());
    },
  });

  const bgAnimation2 = useSpring({
    ...animation,
    delay: 100,
  });

  return (
    <animated.div style={bgAnimation} className="popup-container">
      <animated.div style={bgAnimation2}>
        <section className="popup-container-title">
          <h3>{props.title}</h3>
          <Icon
            icon="ion:close"
            color="#00a3ff"
            width="48"
            onClick={() => {
              setRevert(true);
            }}
          />
        </section>
        <section>{props.children}</section>
      </animated.div>
    </animated.div>
  );
};

export default Popup;
