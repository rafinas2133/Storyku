import { Menu, Transition } from "@headlessui/react";
import React,{useState, useEffect} from "react";
import {
  DocumentDuplicateIcon,
  PencilIcon,
  ListBulletIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Field } from "formik";

export const DropdownItem = ({
  as = "button",
  to = "#",
  isRed,
  isBlue,
  text,
  icon,
  onClick,
  children,
  className,
  disabled,
}) => {
  const itemStyle = `space-x-3 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-200 `;
  const textStyle = isRed
    ? "text-red-500"
    : isBlue
    ? "text-blue-800"
    : "text-gray-500";

  const handleClick = (event) => {
    event.stopPropagation();
    if (!disabled && onClick) onClick();
  };

  const renderItem = () => (
    <>
      {icon} <p className={textStyle}>{text || children}</p>
    </>
  );

  return (
    <Menu.Item disabled={disabled}>
      {as === "a" ? (
        <Link to={to} className={itemStyle} onClick={handleClick}>
          {renderItem()}
        </Link>
      ) : (
        <button type="button" className={itemStyle} onClick={handleClick} disabled={disabled}>
          {renderItem()}
        </button>
      )}
    </Menu.Item>
  );
};


export const DropdownItemDelete = ({ onClick, children = "Delete" }) => (
  <DropdownItem
    as="button"
    isRed
    onClick={onClick}
    icon={<TrashIcon className="h-4 fill-red-500" />}
  >
    {children}
  </DropdownItem>
);

export const DropdownItemUpdate = ({ onClick, children = "Update" }) => (
  <DropdownItem
    as="button"
    onClick={onClick}
    icon={<PencilIcon className="h-4 fill-gray-500" />}
  >
    {children}
  </DropdownItem>
);

export const DropdownItemDetail = ({ onClick, children = "Detail" }) => (
  <DropdownItem
    as="button"
    onClick={onClick}
    icon={<ListBulletIcon className="h-4 fill-gray-500" />}
  >
    {children}
  </DropdownItem>
);
