import { TableCell, makeStyles } from "@material-ui/core";
import { findBestValues, getObjectValueByPath } from "../../Utils/utils";

const useStyles = makeStyles({
  blue: {
    backgroundColor: "blue",
  },
  green: {
    backgroundColor: "green",
  },
});

export function TariffCell({ value, object, className }) {
  return (
    <TableCell key={`${value}-${object.id}`} className={className}>
      {value ? value : "-"}
    </TableCell>
  );
}

export function InternetCell({ value, object, payload }) {
  const styles = useStyles();
  let className;

  if (value === payload.internetSpeed.value) {
    className = styles[payload.internetSpeed.entry > 1 ? "blue" : "green"];
  }

  return <TariffCell value={value} object={object} className={className} />;
}

export function SmartCell({ value, object, payload: { profit, dataPath } }) {
  const styles = useStyles();
  const { value: profitValue, entry } = getObjectValueByPath(profit, dataPath);

  const className =
    profitValue === value ? styles[entry > 1 ? "blue" : "green"] : "";

  return <TariffCell value={value} object={object} className={className} />;
}

export function BestCell({ object, payload: { profit } }) {
  const bestValues = findBestValues(profit, object);

  return <TariffCell value={bestValues} object={object} />;
}
