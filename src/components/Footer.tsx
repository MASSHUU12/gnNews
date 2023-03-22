import { useEffect, useState } from "react";
import { getCurrentTime } from "../helpers/getCurrentTime";

const Footer: React.FunctionComponent<any> = () => {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <footer>Godzina: {time}</footer>;
};

export default Footer;
