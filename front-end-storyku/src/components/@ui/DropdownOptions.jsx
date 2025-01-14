import { Menu } from "@headlessui/react";
import { useFormikContext } from "formik";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Dropdown } from "./Dropdown";
import { DropdownItem } from "./DropdownItem";

export const DropdownOptions = ({isDisabled, className, children, options, name, ...props }) => {
    const { setFieldValue, values } = useFormikContext();

    const handleSelect = (value) => {
        if (!isDisabled) {
            setFieldValue(name, value);
        }
    };

    return (
        <div className={`w-full mb-6 ${className} `}>
            <label className="block mb-2 text-lg font-light text-gray-900">
                {children}
            </label>
            <Dropdown
                disabled={isDisabled}
                className={`w-full rounded-md border border-gray-300 ${isDisabled ? 'pointer-events-none' : ''}`}
                button={
                    <div className="flex items-center justify-between gap-2 p-2 w-full h-12">
                        <span className="text-sm">
                            {values[name] ? 
                                options.find(opt => opt.value === values[name])?.label 
                                : `Select ${children}`}
                        </span>
                        <ChevronDownIcon className="h-5" />
                    </div>
                }
            >
                {!isDisabled && options.map((option) => (
                    <DropdownItem
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                    >
                        {option.label}
                    </DropdownItem>
                ))}
            </Dropdown>
        </div>
    );
};