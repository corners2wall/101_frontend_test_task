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

export default function Table({
  data,
  columns,
  getRowKey = getDefaultRowKey,
  payload,
}) {
  const tableColumns = useMemo(() => {
    return columns.map((column, index) => (
      <TableCell key={index}>{column.title}</TableCell>
    ));
  }, [columns]);

  return (
    <MUITable>
      <TableHead>
        <TableRow>{tableColumns}</TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={getRowKey(item)}>
            {columns.map(({ dataPath, renderCell }, index) => {
              const property = getObjectProperty(item, dataPath);

              return (
                <TableCell key={index}>
                  {renderCell(property, item, payload)}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </MUITable>
  );
}
