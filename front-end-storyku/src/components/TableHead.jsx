import { flexRender } from "@tanstack/react-table";

export const TableHead = ({ headerGroups }) => {
  return (
    <thead className=" bg-slate-100 text-left">
      {headerGroups.map(({ headers, id }) => (
        <tr key={id} className="h-16 text-sm">
          {headers.map(({ id, column, getContext }) => (
            <th key={id} className={`!w-fit font-bold px-4 ${id === "no" || id === "action" ? "text-center" : ""}
`}>
              {flexRender(column.columnDef.header, getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
