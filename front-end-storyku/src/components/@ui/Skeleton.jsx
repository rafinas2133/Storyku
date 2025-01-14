import { Motion } from "./Motion";

export const Skeleton = ({ className }) => {
    return (
        <Motion>
            <div
                role="status"
                className={`w-full h-full p-4 rounded animate-pulse md:p-6 ${className}`}
            >
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
                <div className="w-full h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-3"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-4"></div>
                <div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-3"></div>
                <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5 mb-3.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-4"></div>
                <div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-3"></div>
                <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/5 mb-3.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-3"></div>

                <span className="sr-only">Loading...</span>
            </div>
        </Motion>
    );
};