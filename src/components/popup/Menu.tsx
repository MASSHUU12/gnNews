import { memo } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setLayout } from "../../features/layout/layoutSlice";

import Popup from "./Popup";
import "./Menu.scss";
import countriesData from "../../countries.json";
import { setTargetCountry } from "../../features/news/newsSlice";
import { TogglePopup } from "../../interfaces";

const Menu: React.FunctionComponent<TogglePopup> = ({
  togglePopup,
}: Props): JSX.Element => {
  const layout = useAppSelector((state) => state.layout.layout);
  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();

  const countries = Object.keys(countriesData).map((key) => ({
    code: key,
    name: {
      en: countriesData[key].en,
      pl: countriesData[key].pl,
    },
  }));

  const CountryItem = memo(
    ({
      code,
      name,
      onClick,
    }: {
      code: string;
      name: string;
      onClick: () => any;
    }): JSX.Element => (
      <section className="menu-contry">
        <Icon
          icon={`flagpack:${code === "gb" ? "gb-ukm" : code}`}
          color="white"
          width="48"
          onClick={onClick}
        />
        <span>{name}</span>
      </section>
    ),
    (prevProps, nextProps) =>
      prevProps.code === nextProps.code && prevProps.name === nextProps.name
  );

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
        {countries.map((country) => (
          <CountryItem
            key={country.code}
            code={country.code}
            name={i18n.language === "en" ? country.name.en : country.name.pl}
            onClick={() => {
              dispatch(setTargetCountry(country.code));
            }}
          />
        ))}
      </section>
    </Popup>
  );
};

export default Menu;
