import React from 'react';
import { useModal } from "../../hooks/useModal";
import { Modal } from "./Modal";
import { useSearch } from "../../hooks/useSearch";
import { SearchV2 } from "./Search";

export const TagsStack = ({ 
  tags = "", 
  color = "primary",
  maxDisplay = 2
}) => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const tagsArray = tags.split(',').filter(tag => tag.trim());
    const { filteredData, handleChange } = useSearch("", tagsArray);

    const handleClick = (e) => {
        e.stopPropagation();
        openModal();
    };

    const renderModalContent = (tag) => (
        <div
            key={tag}
            className="px-4 py-2 hover:bg-gray-100 "
        >
            <span>{tag.trim()}</span>
        </div>
    );

    if (!tagsArray?.length) return null;

    return (
        <>
            <Modal isOpen={isModalOpen} closeModal={closeModal} noPadding>
                <div className="pb-4">
                    <SearchV2 onChange={handleChange} />
                    {filteredData.map(renderModalContent)}
                </div>
            </Modal>
            <div 
                className={`inline-flex items-center gap-1 p-2 ${
                    color === "primary" ? "bg-primary-400" : "bg-gray-300"
                } rounded-xl cursor-pointer`}
                onClick={handleClick}
            >
                {tagsArray.slice(0, maxDisplay).map((tag, index) => (
                    <span 
                        key={`tag-${tag}-${index}`} 
                        className="text-sm text-black bg-slate-300 px-2 py-1 rounded-full"
                    >
                        {tag.trim()}
                        {index < Math.min(tagsArray.length, maxDisplay) - 1}
                    </span>
                ))}
                {tagsArray.length > maxDisplay && (
                    <span className="text-sm text-black bg-slate-300 px-2 py-1 rounded-full">
                        +{tagsArray.length - maxDisplay}
                    </span>
                )}
            </div>
        </>
    );
};

export default TagsStack;