import { useState } from "react";

export const useAction = (initialState = { type: "", data: null }) => {
  const [action, setAction] = useState("");

  const updateAction = (type, data) => {
    setAction({ type, data });
  };

  const resetAction = () => {
    setAction(initialState);
  };

  const setActionUpdate = (data = null) => {
    updateAction("update", data);
  };

  const setActionDelete = (data = null) => {
    updateAction("delete", data);
  };

  const setActionDetail = (data = null) => {
    updateAction("detail", data);
  };

  const isActionUpdate = action.type === "update";
  const isActionDelete = action.type === "delete";
  const isActionDetail = action.type === "detail";

  return {
    type: action.type,
    data: action.data,
    state: action,
    isActionUpdate,
    isActionDelete,
    isActionDetail,
    setActionUpdate,
    setActionDelete,
    setActionDetail,
    resetAction,
  };
};
