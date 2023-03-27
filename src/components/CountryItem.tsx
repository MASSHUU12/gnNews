import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks";

interface Props {
  code: string;
  name: string;
}

/**
 * Functional component that renders a country item
 * with its corresponding flag and name.
 *
 * @param {object} props - The props object containing the country code and name.
 * @param {string} props.code - The ISO 3166-1 alpha-2 code of the country.
 * @param {string} props.name - The name of the country.
 * @return {*}  {JSX.Element} The country item JSX Element.
 */
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
