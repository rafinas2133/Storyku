import { Navigate, Outlet } from "react-router";
import { Sidebar } from "../@sidebar/Sidebar";
import { Breadcrumbs } from "../@ui/Breadcrumbs";

/**
 * Renders the admin layout.
 * @returns {JSX.Element} The admin layout.
 */
export const DasboardLayout = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col w-full h-screen overflow-y-scroll bg-slate-50">
                <div className="p-8">
                    <Breadcrumbs />
                    <Outlet />
                </div>
            </div>
        </div>
    );

};
