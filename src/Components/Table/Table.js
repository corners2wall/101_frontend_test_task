import {
  TableHead,
  Table as MUITable,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { getObjectValueByPath } from "../../Utils/utils";
import { useMemo } from "react";

const getDefaultRowKey = (object) => object.id;

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
              const value = getObjectValueByPath(item, dataPath);

              return renderCell({
                value,
                object: item,
                payload: { ...payload, dataPath },
              });
            })}
          </TableRow>
        ))}
      </TableBody>
    </MUITable>
  );
}
