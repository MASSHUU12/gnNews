import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Menu from "./popup/Menu";
import { useState } from "react";

/**
 * Header component
 *
 * @return {*}  {JSX.Element}
 */
const Header: React.FunctionComponent<any> = (): JSX.Element => {
  const [popupEnabled, setPopupEnabled] = useState(false);

  const togglePopup = (enabled: boolean) => {
    setPopupEnabled(enabled);
  };

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
          onClick={() => setPopupEnabled(true)}
        />
      </header>
      {popupEnabled && <Menu togglePopup={togglePopup} />}
    </>
  );
};

export default Header;
