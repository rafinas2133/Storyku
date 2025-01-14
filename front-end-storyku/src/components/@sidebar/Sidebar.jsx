import { useState } from "react";
import { SidebarHeading } from "./SidebarHeading";
import { SidebarItem } from "./SidebarItem";
import {Images} from "../../utils/Image";
import { 
    HomeIcon as ActiveHomeIcon,
    BookOpenIcon as ActiveBookOpenIcon
    } from "@heroicons/react/24/solid";
import { 
    HomeIcon as InactiveHomeIcon, 
    BookOpenIcon as InactiveBookOpenIcon
} from "@heroicons/react/24/outline";

const initialSidebarItems = [
    {
        text: "Dashboard",
        path: "/",
        icon: {
            active: <ActiveHomeIcon />,
            inactive: <InactiveHomeIcon />,
        },
    },
    {
        text: "Story Management",
        path: "/story",
        icon: {
            active: <ActiveBookOpenIcon />,
            inactive: <InactiveBookOpenIcon />,
        },
    },
];

export const Sidebar = () => {
    const [sidebarItems, setSidebarItems] = useState(initialSidebarItems);

    return (
        <div className="relative h-screen overflow-visible shadow-md">
            <div className="!px-0 pb-24 sidebar-wrapper ">
                <div className="mt-6 mb-8 bg-red">
                    <img src={Images.Company.red} alt="Logo ISO" className="h-16 mx-auto" />
                </div>
                    {sidebarItems.map((item, index) => (
                        <SidebarItem key={index} {...item} />
                    ))}
            </div>
        </div>
    );
};
