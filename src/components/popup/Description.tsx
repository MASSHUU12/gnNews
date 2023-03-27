import { useTranslation } from "react-i18next";

import Popup from "./Popup";

import { ContentItem } from "@/types";
import { TogglePopup } from "@/interfaces";
import { formatISODate } from "@/helpers/time";

import "./Description.scss";

interface Props extends TogglePopup, ContentItem {}

const Description: React.FunctionComponent<Props> = ({
  togglePopup,
  author,
  title,
  description,
  url,
  publishedAt,
  content,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Popup title={author ? author : ""} togglePopup={togglePopup}>
      <section className="description-content">
        <h3>{title}</h3>
        <p>
          {description
            ? description
            : content
            ? content
            : "No information on the content, click the link below to go to the source"}
        </p>
        <span>
          {t("posted")}: {formatISODate(publishedAt)}
        </span>
        <a href={url} target="_blank">
          {t("source")}
        </a>
      </section>
    </Popup>
  );
};

export default Description;
