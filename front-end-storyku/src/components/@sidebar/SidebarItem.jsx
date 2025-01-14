import { NavLink } from "react-router-dom";

export const SidebarItem = ({ icon, text, path }) => {
    return (
        <NavLink to={path}>
            {({ isActive }) => (
                <div
                    className={` hover:text-white transition-colors duration-300 flex justify-center md:justify-normal w-full md:w-64 gap-2 px-6 py-4 my-2 ${
                        isActive
                            ? "text-white bg-[#32d0d2]"
                            : "bg-white text-gray-900 hover:bg-[#32bcd2] "
                    }`}
                >
                    <div className="w-6 h-6 min-w-6">
                        {typeof icon === "string" ? (
                            <img src={icon} />
                        ) : isActive ? (
                            <>{icon?.active}</>
                        ) : (
                            <>{icon?.inactive}</>
                        )}
                    </div>
                    <div className="hidden md:block">{text}</div>
                </div>
            )}
        </NavLink>
    );
};
