import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="error-container">
      <h1>{t("oops")}</h1>
      <h2>{error.status}</h2>
      <span>{error.statusText || error.message}</span>
      <Link to="/country/pl" reloadDocument>
        {t("take_me_home")}
      </Link>
    </div>
  );
};

export default Error;
