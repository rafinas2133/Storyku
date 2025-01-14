import { ButtonPrimary, ButtonSecondary } from "./Button";
import { Loading } from "./Loading";
import { Modal } from "./Modal";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export const ModalConfirmation = ({ image, isOpen, closeModal, onConfirm, title, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <div className="text-center">
                {typeof image === "string" 
                    ? <img src={image} className="w-32 mx-auto" />
                    : image || <ExclamationCircleIcon className="w-32 mx-auto fill-yellow-300" />
                }

                <h3 className="text-lg font-medium my-2">{title}</h3>
                <span className="inline-block my-4 text-lg">
                    {children}
                </span>
                
                <div className="grid grid-cols-2 gap-4">
                    <ButtonSecondary
                        className="rounded-full bg-red-600 hover:bg-red-500 text-white"
                        onClick={closeModal}
                    >
                        Cancel
                    </ButtonSecondary>
                    <ButtonPrimary
                        className="rounded-full"
                        onClick={onConfirm}
                    >
                        Confirm
                    </ButtonPrimary>
                </div>
            </div>
        </Modal>
    );
};
