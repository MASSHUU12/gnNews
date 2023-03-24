import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setLayout } from "../../features/layout/layoutSlice";

import Popup from "./Popup";
import "./Menu.scss";
import { setTargetCountry } from "../../features/news/newsSlice";
import { TogglePopup } from "../../interfaces";
import CountryItem from "../CountryItem";

const Menu: React.FunctionComponent<TogglePopup> = ({
  togglePopup,
}: TogglePopup): JSX.Element => {
  const layout = useAppSelector((state) => state.layout.layout);
  const countriesData = useAppSelector((state) => state.countries.countries);
  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();

  return (
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
            clicked={() => {
              dispatch(setTargetCountry(countriesData[key].en));
            }}
          />
        ))}
      </section>
    </Popup>
  );
};

export default Menu;
