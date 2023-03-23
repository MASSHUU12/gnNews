import { Icon } from "@iconify/react";

import Popup from "./Popup";
import "./Menu.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setLayout } from "../../features/layout/layoutSlice";

const Menu: React.FunctionComponent<any> = (): JSX.Element => {
  const layout = useAppSelector((state) => state.layout.layout);
  const dispatch = useAppDispatch();

  return (
    <Popup title="Menu">
      <section className="menu-row">
        <span>Layout:</span>
        <Icon
          icon="material-symbols:featured-play-list"
          width="48"
          data-active={layout === "list" ? "true" : "false"}
          onClick={() => {
            dispatch(setLayout("list"));
          }}
        />
        <Icon
          icon="ic:round-grid-view"
          width="48"
          data-active={layout === "grid" ? "true" : "false"}
          onClick={() => {
            dispatch(setLayout("grid"));
          }}
        />
      </section>
      <section className="menu-row">
        <span>Language:</span>
        <Icon icon="flagpack:pl" color="white" width="48" />
        <Icon icon="flagpack:us" color="white" width="48" />
      </section>
    </Popup>
  );
};

export default Menu;
