import { Spinner } from "flowbite-react";

export const Loading = ({ ...props }) => (
    <div className="my-4 text-center">
        <Spinner
            className="stroke-2 fill-slate-500"
            {...props}
        />
    </div>
);
