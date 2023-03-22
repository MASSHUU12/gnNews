import { useState } from "react";
import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";

import { useAppDispatch } from "../hooks";
import { disableMenus } from "../features/popup/popupSlice";

/**
 * General popup component
 *
 * @param {*} props
 * @return {*}  {JSX.Element}
 */
const Popup: React.FunctionComponent<any> = (props): JSX.Element => {
  const [revert, setRevert] = useState(false);
  const dispatch = useAppDispatch();

  const animation = {
    from: {
      x: window.innerWidth,
    },
    to: {
      x: 0,
    },
    reset: true,
  };

  const bgAnimation = useSpring({
    ...animation,
    reverse: revert,
    onRest: () => {
      revert && dispatch(disableMenus());
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
