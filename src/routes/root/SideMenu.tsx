import { useTranslation } from "react-i18next";
import CountryItem from "../../components/CountryItem";
import { setTargetCountry } from "../../features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

import "./SideMenu.scss";

const SideMenu: React.FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const countriesData = useAppSelector((state) => state.countries.countries);
  const targetCountry = useAppSelector((state) => state.news.targetCountry);

  const { t, i18n } = useTranslation();

  return (
    <div className="side_menu-container">
      <h3>
        {t("news_from")}
        {i18n.language === "en"
          ? ` ${countriesData[targetCountry].en}`
          : ` ${countriesData[targetCountry].pl}`}
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
            clicked={() => {
              dispatch(setTargetCountry(key));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
