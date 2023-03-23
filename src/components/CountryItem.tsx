import { Icon } from "@iconify/react";

interface Props {
  code: string;
  name: string;
  onClick: () => any;
}

const CountryItem: React.FunctionComponent<Props> = ({
  code,
  name,
  onClick,
}: Props): JSX.Element => {
  return (
    <section className="country-item">
      <Icon
        icon={`flagpack:${code === "gb" ? "gb-ukm" : code}`}
        color="white"
        width="48"
        onClick={onClick}
      />
      <span>{name}</span>
    </section>
  );
};

export default CountryItem;
