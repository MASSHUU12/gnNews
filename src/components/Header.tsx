import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Menu from "./popup/Menu";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setLayout } from "../features/layout/layoutSlice";
import i18n from "../i18n";

/**
 * Header component
 *
 * @return {*}  {JSX.Element}
 */
const Header: React.FunctionComponent<any> = (): JSX.Element => {
  const [popupEnabled, setPopupEnabled] = useState(false);
  const layout = useAppSelector((state) => state.layout.layout);
  const dispatch = useAppDispatch();

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
          className="header-mobile-hamburger"
          icon="icon-park-outline:hamburger-button"
          color="#00a3ff"
          width="32"
          onClick={() => setPopupEnabled(true)}
        />
        <div className="header-desktop-icons">
          <Icon
            icon="material-symbols:featured-play-list"
            width="48"
            data-active={layout === "list" ? "true" : "false"}
            onClick={() => {
              dispatch(setLayout("list"));
            }}
          />
          <Icon
            icon="ic:round-grid-view"
            width="48"
            data-active={layout === "grid" ? "true" : "false"}
            onClick={() => {
              dispatch(setLayout("grid"));
            }}
          />
          <Icon
            icon="flagpack:pl"
            color="white"
            width="48"
            onClick={() => {
              i18n.changeLanguage("pl");
            }}
          />
          <Icon
            icon="flagpack:us"
            color="white"
            width="48"
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          />
        </div>
      </header>
      {popupEnabled && <Menu togglePopup={togglePopup} />}
    </>
  );
};

export default Header;
