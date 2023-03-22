import { useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";

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
      <Outlet />
    </div>
  );
};

export default Root;
