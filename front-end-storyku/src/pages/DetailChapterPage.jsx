import React from "react";
import { Button } from "../components/@ui/Button";
import { FormCreateChapter } from "../components/FormCreateChapter";
import { useParams } from "react-router-dom";
import { useGetChapters } from "../hooks/chapter/useGetChapters";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Loading } from "../components/@ui/Loading";

export const DetailChapterPage = () => {
  const { id: storyId, chapterId } = useParams();
  const { data: chapter, isLoading } = useGetChapters(storyId, chapterId);

  if (isLoading) return <Loading />;

  return (
    <div className="pb-6">
      <h1 className="text-3xl font-medium mb-2">Chapter Detail</h1>
      <Button 
        className="flex justify-start items-center h-6 mb-6 bg-slate-200 rounded-full hover:bg-slate-300" 
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="h-4 stroke-2 fill-gray-500" />
        <span className="ml-2">Back</span>
      </Button>

      <FormCreateChapter 
        initialValues={chapter}
        isDisabled={true}
      >
        <div className="flex justify-end gap-4 mt-6">
          <Button 
            type="button" 
            onClick={() => window.history.back()}
            className="border border-slate-200 rounded-full hover:bg-slate-300"
          >
            Back
          </Button>
        </div>
      </FormCreateChapter>
    </div>
  );
};