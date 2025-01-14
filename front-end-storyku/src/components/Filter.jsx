import React, { useState, useEffect } from "react";
import { Button } from "./@ui/Button";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Dropdown } from "./@ui/Dropdown";
import { DropdownItem } from "./@ui/DropdownItem";

export const Filter = ({ onClose, onApplyFilter, initialFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const categoryOption = [
        { label: "Financial", value: "Financial" },
        { label: "Health", value: "Health" },
        { label: "Technology", value: "Technology" },
    ];

    const statusOption = [
        { label: "Publish", value: "Publish" },
        { label: "Draft", value: "Draft" },
    ];

    useEffect(() => {
        if (initialFilter) {
            setSelectedCategory(initialFilter.category || "");
            setSelectedStatus(initialFilter.status || "");
        }
    }, [initialFilter]);

    const handleReset = () => {
        setSelectedCategory("");
        setSelectedStatus("");
    };

    const handleFilter = () => {
        onApplyFilter({ category: selectedCategory, status: selectedStatus });
        onClose();
    };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between">
                <span className="text-2xl pl-4 font-bold">Filter</span>
                <Button onClick={onClose}>
                    <XMarkIcon className="h-6 fill-gray-500" />
                </Button>
            </div>
            <div className="mt-8 pl-4 w-full pr-4">
                <div className="text-lg font-medium">Category</div>
                <Dropdown
                    className={"w-full rounded-md border border-slate-200"}
                    button={
                        <div className="flex items-center justify-between gap-2 p-2 w-full">
                            <span>{selectedCategory || "Select Category"}</span>
                            <ChevronDownIcon className="h-6" />
                        </div>
                    }
                >
                    {categoryOption.map((item, index) => (
                        <DropdownItem 
                        key={index}
                        as="button"
                        onClick={() => setSelectedCategory(item.value)}
                    >
                        <span className="text-black text-md font-medium">{item.label}</span>
                    </DropdownItem>
                    ))}
                </Dropdown>
            </div>
            <div className="mt-12 pl-4 w-full pr-4">
                <div className="text-lg font-medium">Status</div>
                <Dropdown
                    className={"w-full rounded-md border border-slate-200"}
                    button={
                        <div className="flex items-center justify-between gap-2 p-2 w-full">
                            <span>{selectedStatus || "Select Status"}</span>
                            <ChevronDownIcon className="h-6" />
                        </div>
                    }
                >
                    {statusOption.map((item, index) => (
                        <DropdownItem 
                            key={index}
                            as="button"
                            onClick={() => setSelectedStatus(item.value)}
                        >
                            <span className="text-black text-md font-medium">{item.label}</span>
                        </DropdownItem>
                    ))}
                </Dropdown>
            </div>
            <div className="flex justify-between mt-12 pl-4 w-full pr-4">
                <Button
                    className={"border border-slate-200 rounded-full hover:bg-slate-200"}
                    onClick={handleReset}
                >
                    Reset
                </Button>
                <div className="flex gap-4">
                    <Button
                        className={"border border-slate-200 rounded-full hover:bg-slate-200"}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        className={
                            "border border-slate-200 bg-orange-500 rounded-full hover:bg-orange-600 text-white"
                        }
                        onClick={handleFilter}
                    >
                        Filter
                    </Button>
                </div>
            </div>
        </div>
    );
};
