import {useGetAllChapters} from "../hooks/chapter/useGetAllChapters"
import { Table } from "./Table";
import { useTable } from "../hooks/useTable";
import { ChapterAction } from "./ChapterAction";
import { useChapterContext } from '../context/ChapterContext';
import { Link } from "react-router-dom";

export const ChapterList = ({actionChoice = ["detail", "update", "delete"], storyId, data: externalData }) => {
    const { data: apiData, isLoading } = storyId 
    ? useGetAllChapters(storyId) 
    : { data: null, isLoading: false };
    
    const data = externalData || apiData;

    const { columns, action, modal } = useTable({
        showTitle: true,    
        showUpdateAt: true,
        showAction: actionChoice,
    });

    if (isLoading && !externalData) return <div>Loading chapters...</div>;
    
    return (
        <>
            <Table 
                data={data} 
                columns={columns} 
                action={action} 
                isShowBottom={false}
            />
            {modal}
            <ChapterAction action={action} />
        </>
    );
};

export const TempChapterList = () => {

    const { temporaryChapters, removeTemporaryChapter } = useChapterContext();

    const formattedChapters = temporaryChapters.map((chapter, index) => ({
        id: `temp-${index}`, 
        title: chapter.title,
        story: chapter.story,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }));

    return (
        <>
            <div className="mt-8">
                {
                    formattedChapters.length > 0 ? (
                        <ChapterList data={formattedChapters}  />
                    ) : (
                        <div className="text-center text-gray-500 py-8">
                            No chapters added yet
                        </div>
                    )
                }
            </div>
        </>
    );
}