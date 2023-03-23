import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getCurrentTime } from "../helpers/time";
import { useAppSelector } from "../hooks";

/**
 * Footer component
 *
 * @return {*}  {JSX.Element}
 */
const Footer: React.FunctionComponent<any> = (): JSX.Element => {
  const [time, setTime] = useState<string>(getCurrentTime());
  const newsNumber = useAppSelector((state) => state.news.newsNumber);

  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <footer>
      {t("time")}: {time}, {t("articles")}: {newsNumber}
    </footer>
  );
};

export default Footer;
