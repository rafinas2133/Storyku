export const TableBottomButton = ({ children, ...props }) => {
    const { disabled } = props;

    return (
        <button
            className={`p-2 rounded-lg ${disabled ? "bg-gray-100" : "bg-gray-200"}`}
            {...props}
        >
            {children}
        </button>
    );
};
