import { flexRender } from "@tanstack/react-table";
import { TableEmpty } from "./TableEmpty";

export const TableBody = ({ rowModel, columnsLength }) => {
  return (
    <tbody className="text-left">
      {rowModel.rows.length === 0 ? (
        <TableEmpty columnsLength={columnsLength} />
      ) : (
        rowModel.rows.map(({ id, getVisibleCells }) => (
          <tr key={id} className="text-sm border-primary border-y h-14 even:bg-gray-100 hover:bg-gray-200">
            {getVisibleCells().map(({ id, column, getContext }) => (
              <td key={id} className={`${"ps-1"}`}>
                {flexRender(column.columnDef.cell, getContext())}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
};
