import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";

interface Props {
  code: string;
  name: string;
}

const CountryItem: React.FunctionComponent<Props> = ({
  code,
  name,
}: Props): JSX.Element => {
  const targetCountry = useAppSelector((state) => state.news.targetCountry);

  return (
    <Link
      reloadDocument
      to={`/country/${code}`}
      className="country-item"
      data-active={code === targetCountry ? "true" : "false"}
    >
      <Icon
        icon={`flagpack:${code === "gb" ? "gb-ukm" : code}`}
        color="white"
        width="48"
      />
      <span>{name}</span>
    </Link>
  );
};

export default CountryItem;
