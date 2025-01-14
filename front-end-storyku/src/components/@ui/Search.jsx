import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const Search = ({ children = "Cari", ...props }) => {
  return (
    <div className="relative flex">
      <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none start-0">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
      </div>
      <input id="search" type="text" placeholder={children} className="block h-12 pl-10 pr-8 transition-colors bg-white border-2 border-primary focus:ring-0 w-96 focus:border-primary-600 focus:bg-slate-100" {...props} />
    </div>
  );
};

export const SearchV2 = ({ ...props }) => {
  return (
    <div className="relative mb-2 border-b-2 border-primary">
      <input id="search" type="text" className="w-full border-none rounded-lg focus:border-primary focus:ring-0 ps-9" {...props} />
      <div className="absolute top-0 flex items-center h-full px-2">
        <MagnifyingGlassIcon className="left-0 w-5 h-5 stroke-2 fill-gray-500" />
      </div>
    </div>
  );
};

