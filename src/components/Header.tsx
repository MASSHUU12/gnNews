import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Popup from "./Popup";

const Header: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <>
      <header>
        <Link to="/" reloadDocument>
          gnNews
        </Link>
        <Icon
          icon="icon-park-outline:hamburger-button"
          color="#00a3ff"
          width="32"
        />
      </header>
      {/* <Popup title="Menu">
        <p>Lorem ipsum dolor sit amet</p>
      </Popup> */}
    </>
  );
};

export default Header;
