import { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <footer>
      Godzina: {time}, artykuły: {newsNumber}
    </footer>
  );
};

export default Footer;
