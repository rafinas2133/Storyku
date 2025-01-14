import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const Dropdown = ({ children, icon, button, className, disabled }) => (
    <Menu as="div" className={`relative inline-block text-left ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}>
        <div>
            <Menu.Button 
                disabled={disabled}
                className={`inline-flex justify-center w-full rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${disabled ? 'pointer-events-none' : ''}`} 
                onClick={(e) => e.stopPropagation()}
            >
                {icon || button}
            </Menu.Button>
        </div>
        {!disabled && (
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none ${className}`}>
                    <div className="px-1 py-1">
                        {children}
                    </div>
                </Menu.Items>
            </Transition>
        )}
    </Menu>
);
