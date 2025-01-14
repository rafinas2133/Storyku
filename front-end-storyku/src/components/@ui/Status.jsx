export const Status = ({ color, children }) => {
    return (
        <div
            className={`h-7 px-2 py-1 bg-${color}-100 rounded-full justify-center gap-2 inline-flex items-center`}
        >
            <div
                className={`text-center ${
                    color == "green"
                        ? "text-green-500"
                        : color == "yellow"
                        ? "text-yellow-500"
                        : `text-${color}-500`
                } font-semibold leading-tight capitalize`}
            >
                {children}
            </div>
        </div>
    );
};
