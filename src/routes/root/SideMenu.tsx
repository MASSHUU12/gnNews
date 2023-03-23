import CountryItem from "../../components/CountryItem";
import { setTargetCountry } from "../../features/news/newsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import i18n from "../../i18n";

import "./SideMenu.scss";

const SideMenu: React.FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const countriesData = useAppSelector((state) => state.countries.countries);

  return (
    <div className="side_menu-container">
      {Object.keys(countriesData).map((key) => (
        <CountryItem
          key={key}
          code={key}
          name={
            i18n.language === "en"
              ? countriesData[key].en
              : countriesData[key].pl
          }
          onClick={() => {
            dispatch(setTargetCountry(countriesData[key].en));
          }}
        />
      ))}
    </div>
  );
};

export default SideMenu;
