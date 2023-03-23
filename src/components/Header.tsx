import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setHeaderMenu } from "../features/popup/popupSlice";
import Menu from "./popup/Menu";

/**
 * Header component
 *
 * @return {*}  {JSX.Element}
 */
const Header: React.FunctionComponent<any> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const popup = useAppSelector((state) => state.popup.headerMenuEnabled);

  return (
    <>
      <header>
        <Link to="/" reloadDocument>
          gnNews
        </Link>
        <Icon
          icon="icon-park-outline:hamburger-button"
          color="#00a3ff"
          width="32"
          onClick={() => dispatch(setHeaderMenu(true))}
        />
      </header>
      {popup && <Menu />}
    </>
  );
};

export default Header;
