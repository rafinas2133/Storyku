import React, { useState } from "react";
import { Search } from "../components/@ui/Search";
import { Button } from "../components/@ui/Button";
import { FunnelIcon as FilterIcon } from "@heroicons/react/24/outline";
import { useGetAllStory } from "../hooks/story/useGetAllStory";
import { useSearch } from "../hooks/useSearch";
import { useTable } from "../hooks/useTable";
import { Table } from "../components/Table";
import { Modal } from "../components/@ui/Modal";
import { useModal } from "../hooks/useModal";
import { Filter } from "../components/Filter";
import { Link } from "react-router-dom";
import { StoryAction } from "../components/StoryAction";

export const StoryPage = () => {
    const { data, isLoading, error } = useGetAllStory();
    const { isModalOpen, openModal, closeModal } = useModal();
    const [filter, setFilter] = useState({ category: "", status: "" });

    const { filteredData, handleChange } = useSearch("", data, ["writer", "title"]);

    const { columns, action, modal } = useTable({
        showNumber: true,
        showTitle: true,
        showAuthor: true,
        showCategory: true,
        showKeyword: true,
        showStatus: true,
        showAction: ["detail", "update", "delete"],
    });

    const handleApplyFilter = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleClick = (e) => {
        e.stopPropagation();
        openModal();
    };

    const filteredStories = data?.filter((story) => {
        return (
            (filter.category ? story.category === filter.category : true) &&
            (filter.status ? story.status === filter.status : true)
        );
    });

    return (
        <div>
            <Modal isOpen={isModalOpen} closeModal={closeModal} noPadding size={"lg"}>
                <Filter initialFilter={filter} onClose={closeModal} onApplyFilter={handleApplyFilter} />
            </Modal>
            <div className="text-3xl font-medium"> Stories </div>
            <div className="bg-slate-100 container my-4 p-4 ">
                <div className="flex justify-between pb-4">
                    <Search onChange={handleChange}> Search by Writer/Title</Search>
                    <div className="flex gap-2">
                        <Button onClick={handleClick} className={"bg-white rounded-full hover:bg-slate-100"}>
                            <FilterIcon className="w-6 h-6" />
                        </Button>
                        <div className="bg-gray-400 w-0.5"></div>
                        <Link to="/story/add">
                            <Button className={"bg-orange-500 rounded-full text-white hover:bg-orange-600"}>
                                + Add Story
                            </Button>
                        </Link>
                    </div>
                </div>
                <Table data={filteredStories || filteredData} columns={columns} action={action} />
            </div>
            <StoryAction action={action} />
        </div>
    );
};
