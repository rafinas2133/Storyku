import { useState } from 'react';

export const useModal = (initialState = false) => {
    const [isModalOpen, setModalOpen] = useState(initialState);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const toggleModal = () => {
        setModalOpen((prev) => !prev);
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        toggleModal,
    };
};