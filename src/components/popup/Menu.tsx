import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Info from "./Info";
import Popup from "./Popup";
import CountryItem from "../CountryItem";

import Scroll from "@/helpers/scroll";
import { TogglePopup } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setLayout } from "@/features/layout/layoutSlice";

import "./Menu.scss";

const Menu: React.FunctionComponent<TogglePopup> = ({
  togglePopup,
}: TogglePopup): JSX.Element => {
  const [infoPopupEnabled, setInfoPopupEnabled] = useState(false);

  const layout = useAppSelector((state) => state.layout.layout);
  const countriesData = useAppSelector((state) => state.countries.countries);
  const targetCountry = useAppSelector((state) => state.news.targetCountry);
  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (targetCountry !== "") {
      // Ensure the browser has enough time to render the list before scrolling.
      // This method fixes an issue where the browser stops scrolling
      // after a while if the list is too long
      window.requestAnimationFrame(() => {
        Scroll.intoView({
          target: `#${targetCountry}`,
        });
      });
    }
  }, [targetCountry]);

  return (
    <>
      <Popup title="" togglePopup={togglePopup}>
        <section className="menu-row">
          <span>{t("layout")}:</span>
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
        </section>
        <section className="menu-row">
          <span>{t("language")}:</span>
          <Icon
            icon="flagpack:pl"
            color="white"
            width="48"
            onClick={() => {
              i18n.changeLanguage("pl");
              document.cookie = "language=pl; Path=/";
            }}
          />
          <Icon
            icon="flagpack:us"
            color="white"
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
        </section>
        <p>{t("news_from")}:</p>
        <section className="menu-countries">
          {Object.keys(countriesData).map((key) => (
            <CountryItem
              key={key}
              code={key}
              name={
                i18n.language === "en"
                  ? countriesData[key].en
                  : countriesData[key].pl
              }
            />
          ))}
        </section>
      </Popup>
      {infoPopupEnabled && <Info togglePopup={setInfoPopupEnabled} />}
    </>
  );
};

export default Menu;
