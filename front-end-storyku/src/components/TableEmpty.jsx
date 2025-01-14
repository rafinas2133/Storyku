import { Empty } from "./@ui/Empty";

export const TableEmpty = ({ columnsLength }) => {
    return (
        <tr>
            <td colSpan={columnsLength} className="text-center h-14">
                <Empty />
            </td>
        </tr>
    );
};
