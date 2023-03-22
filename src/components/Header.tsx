import { Link } from "react-router-dom";

const Header: React.FunctionComponent<any> = (): JSX.Element => {
  return (
    <header>
      <Link to="/" reloadDocument>
        gnNews
      </Link>
    </header>
  );
};

export default Header;
