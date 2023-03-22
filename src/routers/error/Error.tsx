import { useRouteError } from "react-router-dom";

const Error: React.FunctionComponent<any> = () => {
  const error = useRouteError();

  return <div>{error.statusText || error.message}</div>;
};

export default Error;
