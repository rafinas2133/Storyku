import { XCircleIcon } from "@heroicons/react/24/solid";
import { Modal } from "./Modal";

export const ModalError = ({ isOpen, closeModal, children }) => {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="text-center">
                <XCircleIcon className="w-32 mx-auto fill-red-600"/>
                <span className="inline-block my-4 text-lg font-medium">
                    {children}
                </span>
                <button
                    className="w-full py-4 text-white transition-colors rounded-full bg-[#32d0d2] hover:bg-[#32bcd2]"
                    onClick={closeModal}
                >Close</button>
            </div>
        </Modal>
    );
};
