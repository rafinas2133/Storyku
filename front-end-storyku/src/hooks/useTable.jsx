import { EllipsisHorizontalIcon, PencilIcon } from "@heroicons/react/24/solid";
import { columnHelper } from "../utils/columnHelper";
import { Link } from "react-router-dom";
import { Dropdown } from "../components/@ui/Dropdown";
import { DropdownItemDelete, DropdownItemUpdate, DropdownItemDetail } from "../components/@ui/DropdownItem";
import { Status } from "../components/@ui/Status";
import TagsStack from "../components/@ui/TagsStack";
import { useAction } from "./useAction";
import dayjs from "dayjs";

export const useTable = ({
    showNumber,
    showTitle,
    showAuthor,
    showCategory,
    showKeyword,
    showStatus,
    showUpdateAt,
    showAction,
  } = {}) => {
    const action = useAction();
    const { setActionDelete, setActionUpdate, setActionDetail} = action;
  
    const renderAction = (row) => {
      return (
        <>
          {showAction.includes("detail") && (
            <DropdownItemDetail
            onClick={() => setActionDetail(row)}
            />
          )}
          {showAction.includes("update") && (
            <DropdownItemUpdate
              onClick={() => setActionUpdate(row)}
            />
          )}
          {showAction.includes("delete") && (
            <DropdownItemDelete
              onClick={() => setActionDelete(row)}
            />
          )}
        </>
      );
    };
  
    const columns = [];
  
    if (showNumber) {
      columns.push(
        columnHelper.accessor((row, index) => index + 1, {
          id: "no",
          header: "No",
          cell: (info) => <div className="text-center text-black">{info.getValue()}</div>
        })
      );
    }
  
    if (showTitle) {
      columns.push(
        columnHelper.accessor("title", {
          header: "Title",
          cell: (info) => <div className="px-4">{info.getValue()}</div>,
        })
      );
    }
  
    if (showAuthor) {
      columns.push(
        columnHelper.accessor("author", {
          header: "Author",
        })
      );
    }
  
    if (showCategory) {
      columns.push(
        columnHelper.accessor("category", {
          header: "Category",
        })
      );
    }

    if (showUpdateAt) {
      columns.push(
        columnHelper.accessor("updated_at", {
          header: <div className="">Last Update</div>,
          cell: (info) => <div className="px-4">{dayjs(info.getValue()).format("DD/MM/YYYY")}</div>
        })
      );
    }
  
    if (showKeyword) {
      columns.push(
        columnHelper.accessor(
          ({tags}) => 
            { 
            return tags === null ? "Tidak ada tag"  : <TagsStack tags={tags} />; 
          },
          {
            header: "Keyword",
            cell: (info) => info.renderValue(),
          }
        )
      );
    }
  
    if (showStatus) {
      columns.push(
        columnHelper.accessor(
          ({ status }) => {
            return status === "Publish" ? 
              <Status color="green">Publish</Status>
             : 
              <Status color="yellow">Draft</Status>
            ;
          },
          {
            id: "status",
            header: "Status",
            cell: (info) => info.renderValue(),
          }
        )
      );
    }
  
    if (showAction) {
      columns.push(
        columnHelper.accessor(
          (row) => {
            return (
              <div className="flex justify-center">
                <Dropdown icon={<EllipsisHorizontalIcon className="h-8 fill-primary" />}>
                  {renderAction(row)}
                </Dropdown>
              </div>
            );
          },
          {
            id: "action",
            header: "Action",
            cell: (info) => info.renderValue(),
          }
        )
      );
    }
  
    return {
      columns,
      action,
      modal: action.modal
    };
  };