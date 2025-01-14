import React from "react";
import { FormCreateStory } from "../components/FormCreateStory";
import { Button } from "../components/@ui/Button";
import { useGetStory } from "../hooks/story/useGetStory";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Loading } from "../components/@ui/Loading";
import { Skeleton } from "../components/@ui/Skeleton";
import { ChapterList } from "../components/ChapterList";
import { ChapterAction } from "../components/ChapterAction";

export const DetailStoryPage = () => {
  const { id } = useParams();
  const { data: story, isLoading } = useGetStory(id);

  if (isLoading) return (
    <Skeleton className={"mx-auto"} />
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-2">Story Detail</h1>
      <Button 
        className="flex justify-start items-center h-6 mb-6 bg-slate-200 rounded-full hover:bg-slate-300" 
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="h-4 stroke-2 fill-gray-500" />
        <span className="ml-2">Back</span>
      </Button>

      <FormCreateStory 
        initialValues={story} 
        isDisabled={true}
      >
      </FormCreateStory>
      <ChapterList storyId={id} actionChoice={["detail"]} />
      <div className="flex justify-end gap-4 mt-6">
          <Button 
            type="button" 
            onClick={() => window.history.back()}
            className="border border-slate-200 rounded-full hover:bg-slate-300"
          >
            Back
          </Button>
        </div>
    </div>
  );
};