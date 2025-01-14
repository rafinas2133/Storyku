import { UpdateStoryPage } from "../pages/UpdateStoryPage";
import { StoryDelete } from "./StoryDelete";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const StoryAction = ({ action }) => {
    const {
        data,
        isActionDelete,
        isActionUpdate,
        isActionDetail,
        resetAction,
    } = action;

    const navigate = useNavigate();

    useEffect(() => {
        if (isActionUpdate) {
            navigate(`/story/${data.id}/update`);
            resetAction();
        }
        if (isActionDetail) {
            navigate(`/story/${data.id}/detail`);
            resetAction();
        }
    }, [isActionUpdate, isActionDetail, data]);

    return (
        <>
            <StoryDelete
                isOpen={isActionDelete}
                closeModal={resetAction}
                story={data}
            />
        </>
    );
};
