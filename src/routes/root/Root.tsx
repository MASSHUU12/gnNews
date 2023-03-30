import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useParams, useNavigate } from "react-router-dom";

import SideMenu from "./SideMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { useAppDispatch } from "@/hooks";
import { getCookie } from "@/helpers/getCookie";
import { setTargetCountry } from "@/features/news/newsSlice";

import "./Root.scss";

/**
 * Root component for the application.
 *
 * @return {JSX.Element}
 */
const Root: React.FunctionComponent<any> = (): JSX.Element => {
  // Get the countryName parameter from the URL
  const { countryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  useEffect(() => {
    // Redirect to Poland if no country is specified
    if (countryName === undefined) {
      navigate("/country/pl");
      dispatch(setTargetCountry("pl"));
    } else dispatch(setTargetCountry(countryName));

    return () => {
      const cookie = getCookie("testDataAlertDisplayed");

      if (import.meta.env.VITE_USE_API === "false" && cookie != "true") {
        document.cookie = "testDataAlertDisplayed=true";
        alert(t("test_data_warning"));
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="root-content-container">
        <SideMenu />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
