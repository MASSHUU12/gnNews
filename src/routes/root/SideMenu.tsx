import { useTranslation } from "react-i18next";
import CountryItem from "../../components/CountryItem";
import { useAppSelector } from "../../hooks";

import "./SideMenu.scss";

const SideMenu: React.FunctionComponent<any> = (): JSX.Element => {
  const countriesData = useAppSelector((state) => state.countries.countries);
  const targetCountry = useAppSelector((state) => state.news.targetCountry);

  const { t, i18n } = useTranslation();

  const newsFrom = (): string => {
    if (targetCountry == "") return "";

    return i18n.language === "en"
      ? ` ${countriesData[targetCountry].en}`
      : ` ${countriesData[targetCountry].pl}`;
  };

  return (
    <div className="side_menu-container">
      <h3>
        {t("news_from")}
        {newsFrom()}
      </h3>
      <div className="side_menu-countries">
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
      </div>
    </div>
  );
};

export default SideMenu;
