import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap = {
    story: "Story Management",
    add: "Add Story",
    detail: "Detail Story",
    update: "Update Story",
  };

  return (
    <div className="flex items-center gap-2 text-sm mb-4">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const isId = !isNaN(name);

        if (isId) return null;

        return (
          <div key={name} className="flex items-center">
            <ChevronRightIcon className="h-4 w-4 text-gray-500" />
            {isLast ? (
              <span className="text-gray-900 font-medium ml-2">
                {breadcrumbNameMap[name] || name}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="text-gray-500 hover:text-gray-700 ml-2"
              >
                {breadcrumbNameMap[name] || name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};