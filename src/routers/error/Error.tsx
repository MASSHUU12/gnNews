import { useRouteError } from "react-router-dom";

/**
 * Component that displays the error message
 * from the current route if there is one.
 *
 * @return {*}  {JSX.Element}
 */
const Error: React.FunctionComponent<any> = (): JSX.Element => {
  const error = useRouteError();

  return <div>{error.statusText || error.message}</div>;
};

export default Error;
