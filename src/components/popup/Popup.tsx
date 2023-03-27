import { Icon } from "@iconify/react";
import { useEffect } from "react";
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
const Popup: React.FunctionComponent<Props> = ({
  title,
  children,
  togglePopup,
}: Props): JSX.Element => {
  useEffect(() => {
    Scroll.disable();
  }, []);

  const [bgAnimation, api] = useSpring(() => ({
    from: {
      x: window.innerWidth,
    },
    to: { x: 0 },
    reverse: false,
  }));

  const bgAnimation2 = useSpring({
    ...bgAnimation,
    delay: 100,
  });

  return (
    <animated.div style={bgAnimation} className="popup-container">
      <animated.div style={bgAnimation2}>
        <section className="popup-container-title">
          <h3>{title}</h3>
          <Icon
            icon="ion:close"
            color="#00a3ff"
            width="48"
            onClick={() => {
              api.start({
                ...bgAnimation,
                reverse: true,
                onRest: () => {
                  togglePopup(false);
                  Scroll.enable();
                },
              });
            }}
          />
        </section>
        <section>{children}</section>
      </animated.div>
    </animated.div>
  );
};

export default Popup;
