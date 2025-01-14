import React from "react";
import { FormCreateStory } from "../components/FormCreateStory";
import { Button } from "../components/@ui/Button";
import { useUpdateStory } from "../hooks/story/useUpdateStory";
import { useGetStory } from "../hooks/story/useGetStory";
import { useGetAllStory } from "../hooks/story/useGetAllStory";
import { ModalSuccessError } from "../components/@ui/ModalSuccessError";
import { useModal } from "../hooks/useModal";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { Skeleton } from "../components/@ui/Skeleton";
import { ChapterList } from "../components/ChapterList";

export const UpdateStoryPage = () => {
  const { id } = useParams();
  const { data: story, isLoading } = useGetStory(id);
  const { refetch } = useGetAllStory();
  const { mutate, reset, isPending, isError, isSuccess } = useUpdateStory();
  const { isModalOpen, closeModal, openModal } = useModal();

  if (isLoading) return <Skeleton className={"mx-auto"} />;

  const handleSubmit = (data) => {
    openModal();
    mutate(
      { storyId: id, data },
      {
        onSuccess: () => {
          refetch();
          window.history.back();
        },
      }
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-medium mb-2">Update Story</h1>
      <Button 
        className="flex justify-start items-center h-6 mb-6 bg-slate-200 rounded-full hover:bg-slate-300" 
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="h-4 stroke-2 fill-gray-500" />
        <span className="ml-2">Back</span>
      </Button>

      <FormCreateStory 
        initialValues={story} 
        onSubmit={handleSubmit}
      >
        <ChapterList 
          storyId={id} 
        />
        <div className="flex justify-end gap-4 mt-6">
          <Button 
            type="button" 
            onClick={() => window.history.back()}
            className="border border-slate-200 rounded-full hover:bg-slate-300"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="border border-slate-200 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          >
            Update
          </Button>
        </div>
      </FormCreateStory>

      <ModalSuccessError
        isOpen={isModalOpen}
        isLoading={isPending} 
        isSuccess={isSuccess}
        isError={isError}
        closeModal={() => {
          closeModal();
          reset();
        }}
        successMessage="Berhasil mengupdate story!"
        errorMessage="Gagal mengupdate story!"
      />
    </div>
  );
};