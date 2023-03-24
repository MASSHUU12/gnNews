import { Icon } from "@iconify/react";
import { useAppSelector } from "../hooks";

interface Props {
  code: string;
  name: string;
  clicked: () => any;
}

const CountryItem: React.FunctionComponent<Props> = ({
  code,
  name,
  clicked,
}: Props): JSX.Element => {
  const targetCountry = useAppSelector((state) => state.news.targetCountry);

  return (
    <section
      className="country-item"
      data-active={code === targetCountry ? "true" : "false"}
      onClick={() => clicked()}
    >
      <Icon
        icon={`flagpack:${code === "gb" ? "gb-ukm" : code}`}
        color="white"
        width="48"
      />
      <span>{name}</span>
    </section>
  );
};

export default CountryItem;
