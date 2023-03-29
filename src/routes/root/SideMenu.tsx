import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import CountryItem from "@/components/CountryItem";

import Scroll from "@/helpers/scroll";
import { useAppSelector } from "@/hooks";

import "./SideMenu.scss";

const SideMenu: React.FunctionComponent<any> = (): JSX.Element => {
  const countriesData = useAppSelector((state) => state.countries.countries);
  const targetCountry = useAppSelector((state) => state.news.targetCountry);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (targetCountry !== "") {
      // Ensure the browser has enough time to render the list before scrolling.
      // This method fixes an issue where the browser stops scrolling
      // after a while if the list is too long
      window.requestAnimationFrame(() => {
        // Scroll through list of countries to the selected country
        Scroll.intoView({
          target: `#${targetCountry}`,
        });

        // Scroll whole window, so the header is again visible
        window.scrollTo({
          top: 0,
        });
      });
    }
  }, [targetCountry]);

  return (
    <div className="side_menu-container">
      <h3>{t("news_from")}</h3>
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
