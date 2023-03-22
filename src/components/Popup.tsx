import { Icon } from "@iconify/react";
import { disableMenus } from "../features/popup/popupSlice";
import { useAppDispatch } from "../hooks";

const Popup: React.FunctionComponent<any> = (props): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div className="popup-container">
      <section className="popup-container-title">
        <h3>{props.title}</h3>
        <Icon
          icon="ion:close"
          color="#00a3ff"
          width="48"
          onClick={() => {
            dispatch(disableMenus());
          }}
        />
      </section>
      <section>{props.children}</section>
    </div>
  );
};

export default Popup;
