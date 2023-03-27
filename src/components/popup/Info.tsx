import { useTranslation } from "react-i18next";

import Popup from "./Popup";
import { TogglePopup } from "@/interfaces";

const Info: React.FunctionComponent<TogglePopup> = ({
  togglePopup,
}: TogglePopup): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Popup title={t("about_project")} togglePopup={togglePopup}>
      <p>{t("biggest_challenge")}</p>
      <p>{t("the_most_fun")}</p>
    </Popup>
  );
};

export default Info;
