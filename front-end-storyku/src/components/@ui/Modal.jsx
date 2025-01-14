import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const Modal = ({ isOpen, closeModal, title, children, size, noPadding }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className={`transform rounded-xl bg-white text-left align-middle shadow-xl transition-all ${size === "lg" ? "w-[40%]" : "w-96"} ${noPadding ? "p-0" : "p-6"}`}
                            >
                                {title && (
                                    <Dialog.Title className="text-xl font-medium">
                                        {title}
                                    </Dialog.Title>
                                )}
                                <div className="mt-4">
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
