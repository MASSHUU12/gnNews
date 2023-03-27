import { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";

import "./Error.scss";

/**
 * Component that displays the error message
 * from the current route if there is one.
 *
 * @return {*}  {JSX.Element}
 */
const Error: React.FunctionComponent<any> = (): JSX.Element => {
  const error = useRouteError();

  useEffect(() => {
    console.log(error);
  }, []);

  return (
    <div className="error-container">
      <h1>Oops! Looks like something went wrong!</h1>
      <h2>{error.status}</h2>
      <span>{error.statusText || error.message}</span>
      <Link to="/country/pl" reloadDocument>
        Take me home
      </Link>
    </div>
  );
};

export default Error;
