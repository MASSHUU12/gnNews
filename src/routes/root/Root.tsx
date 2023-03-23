import { useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideMenu from "./SideMenu";

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

  useEffect(() => {
    // Redirect to Poland if no country is specified
    if (countryName === undefined) {
      navigate("/country/poland");
    }
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
