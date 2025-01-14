import { createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo } from "react";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableBottom } from "./TableBottom";
import dayjs from "dayjs";

const columnHelper = createColumnHelper();

export const Table = ({ data = [], columns = [], name = "Books", isShowBottom = true }) => {
  const _columns = useMemo(() => [...columns], [columns]);

  const _data = useMemo(
    () =>
      data
        .sort((a, b) => {
          const { updated_at: updated_at_a } = a;
          const { updated_at: updated_at_b } = b;

          const unixDateA = dayjs(updated_at_a).unix();
          const unixDateB = dayjs(updated_at_b).unix();

          return unixDateB - unixDateA;
        })
        .map((data, key) => {
          return { ...data, no: key + 1 };
        }),
    [data]
  );

  const { getHeaderGroups, getRowModel, ...table } = useReactTable({
    columns: _columns,
    data: _data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="p-1 border rounded md:rounded-lg md:py-2 ">
      <div className="overflow-x-scroll overflow-y-visible md:overflow-x-visible">
        <table className="w-full text-left table-auto">
          <TableHead headerGroups={getHeaderGroups()} />
          <TableBody rowModel={getRowModel()} columnsLength={_columns.length} />
        </table>
      </div>

      {isShowBottom && <TableBottom getRowModel={getRowModel} dataLength={data.length} {...table} />}
    </div>
  );
};
