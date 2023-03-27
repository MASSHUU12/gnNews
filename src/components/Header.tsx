import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import Menu from "./popup/Menu";
import Info from "./popup/Info";

import i18n from "@/i18n";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLayout } from "@/features/layout/layoutSlice";

/**
 * Header component
 *
 * @return {*}  {JSX.Element}
 */
const Header: React.FunctionComponent<any> = (): JSX.Element => {
  const [menuPopupEnabled, setMenuPopupEnabled] = useState(false);
  const [infoPopupEnabled, setInfoPopupEnabled] = useState(false);
  const layout = useAppSelector((state) => state.layout.layout);
  const dispatch = useAppDispatch();

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
          onClick={() => setMenuPopupEnabled(true)}
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
            width="48"
            onClick={() => {
              i18n.changeLanguage("pl");
              document.cookie = "language=pl; Path=/";
            }}
          />
          <Icon
            icon="flagpack:us"
            width="48"
            onClick={() => {
              i18n.changeLanguage("en");
              document.cookie = "language=en; Path=/";
            }}
          />
          <Icon
            icon="mdi:information-slab-box"
            width="48"
            color="#787680"
            onClick={() => {
              setInfoPopupEnabled(true);
            }}
          />
        </div>
      </header>
      {menuPopupEnabled && <Menu togglePopup={setMenuPopupEnabled} />}
      {infoPopupEnabled && <Info togglePopup={setInfoPopupEnabled} />}
    </>
  );
};

export default Header;
