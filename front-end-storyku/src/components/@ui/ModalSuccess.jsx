import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Modal } from "./Modal";

export const ModalSuccess = ({ isOpen, closeModal, textCloseButton = "Close", children }) => {
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="text-center">
                <CheckCircleIcon className="w-32 mx-auto fill-green-600" />
                <span className="inline-block my-4 text-lg font-medium">
                    {children}
                </span>
                <button
                    className="w-full py-4 text-white transition-colors rounded-full bg-[#32d0d2] hover:bg-[#32bcd2]"
                    onClick={closeModal}
                >{textCloseButton}</button>
            </div>
        </Modal>
    );
};

