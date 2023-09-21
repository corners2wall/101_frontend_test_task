import {
  TableHead,
  Table as MUITable,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { getObjectProperty } from "../../Utils/utils";
import { useMemo } from "react";

const getDefaultRowKey = (object) => object.id;

//ToDo: Add pagination if it necessary. Use themProvide for ru locale
export default function Table({
  data,
  columns,
  getRowKey = getDefaultRowKey,
  payload,
}) {
  const tableColumns = useMemo(
    () => (
      <TableRow>
        {columns.map((column, index) => (
          <TableCell key={index}>{column.title}</TableCell>
        ))}
      </TableRow>
    ),
    [columns]
  );

  return (
    <MUITable>
      <TableHead>{tableColumns}</TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={getRowKey(item)}>
            {columns.map(({ dataPath, renderCell }, index) => {
              const property = getObjectProperty(item, dataPath);

              return renderCell(property, item, payload);
            })}
          </TableRow>
        ))}
      </TableBody>
    </MUITable>
  );
}
