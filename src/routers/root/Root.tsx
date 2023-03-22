import { useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
