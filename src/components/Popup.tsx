import { Icon } from "@iconify/react";

const Popup: React.FunctionComponent<any> = (props): JSX.Element => {
  return (
    <div className="popup-container">
      <section className="popup-container-title">
        <h3>{props.title}</h3>
        <Icon icon="ion:close" color="#00a3ff" width="48" />
      </section>
      <section>{props.children}</section>
    </div>
  );
};

export default Popup;
