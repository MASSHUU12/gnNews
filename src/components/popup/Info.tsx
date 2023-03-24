import { useTranslation } from "react-i18next";

import { TogglePopup } from "../../interfaces";
import Popup from "./Popup";

const Info: React.FunctionComponent<TogglePopup> = ({
  togglePopup,
}: TogglePopup): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Popup title="Some info" togglePopup={togglePopup}>
      <p>{t("biggest_challenge")}</p>
      <p>{t("the_most_fun")}</p>
    </Popup>
  );
};

export default Info;
