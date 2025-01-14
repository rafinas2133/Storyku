import { ChapterDelete } from "./ChapterDelete";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useChapterContext } from '../context/ChapterContext';

export const ChapterAction = ({ action }) => {
    const {
        data,
        isActionDelete,
        isActionUpdate,
        isActionDetail,
        resetAction,
    } = action;

    const { removeTemporaryChapter } = useChapterContext();
    const { id: storyId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!data) return;

        const isTemp = data.id.toString().startsWith('temp-');

        if (isActionUpdate) {
            if (isTemp) {
                const tempIndex = parseInt(data.id.split('-')[1]);
                resetAction();
            } else {
                navigate(`/story/${storyId}/chapter/${data.id}/update`);
                resetAction();
            }
        }
        if (isActionDetail) {
            if (!isTemp) {
                navigate(`/story/${storyId}/chapter/${data.id}/detail`);
                resetAction();
            }
        }
    }, [isActionUpdate, isActionDetail, data]);

    return (
        <>
            <ChapterDelete
                isOpen={isActionDelete}
                closeModal={resetAction}
                chapter={data}
                onDelete={() => {
                    if (data.id.toString().startsWith('temp-')) {
                        const tempIndex = parseInt(data.id.split('-')[1]);
                        removeTemporaryChapter(tempIndex);
                        resetAction();
                    }
                }}
            />
        </>
    );
};