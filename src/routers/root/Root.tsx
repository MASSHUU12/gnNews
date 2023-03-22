import { useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Root: React.FunctionComponent<any> = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
