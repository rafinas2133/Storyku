import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { TableBottomButton } from "./TableBottomButton";

export const TableBottom = ({ getRowModel, dataLength, previousPage, getCanPreviousPage, nextPage, getCanNextPage, getState, setPageSize }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 mb-2 gap-4 text-sm">
      <div>
        <span>
          Showing {getRowModel().rows.length} data out of {dataLength}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select
            value={getState().pagination.pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>data per page</span>
        </div>

        <div className="flex gap-2 md:ms-2">
          <TableBottomButton onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
            <ArrowLeftIcon className="h-6 stroke-2 fill-gray-500" />
          </TableBottomButton>

          <TableBottomButton onClick={() => nextPage()} disabled={!getCanNextPage()}>
            <ArrowRightIcon className="h-6 stroke-2 fill-gray-500" />
          </TableBottomButton>
        </div>
      </div>
    </div>
  );
};
