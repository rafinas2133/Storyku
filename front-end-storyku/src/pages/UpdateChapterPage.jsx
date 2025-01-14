import React from "react";
import { Button } from "../components/@ui/Button";
import { FormCreateChapter } from "../components/FormCreateChapter";
import { useParams } from "react-router-dom";
import { useGetChapters } from "../hooks/chapter/useGetChapters";
import { useUpdateChapters } from "../hooks/chapter/useUpdateChapters";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ModalSuccessError } from "../components/@ui/ModalSuccessError";
import { useModal } from "../hooks/useModal";
import { Loading } from "../components/@ui/Loading";
import { useGetAllChapters } from "../hooks/chapter/useGetAllChapters";

export const UpdateChapterPage = () => {
  const { id: storyId, chapterId } = useParams();
  const { data: chapter, isLoading } = useGetChapters(storyId, chapterId);
  const { refetch } = useGetAllChapters(storyId);
  const { mutate, reset, isPending, isError, isSuccess } = useUpdateChapters();
  const { isModalOpen, closeModal, openModal } = useModal();

  if (isLoading) return <Loading />;

  const handleSubmit = (data) => {
    openModal();
    mutate(
      { storyId, chaptersId: chapterId, data },
      {
        onSuccess: () => {
          refetch();
          setTimeout(() => {
            window.history.back();
          }, 2000);
        },
      }
    );
  };

  return (
    <div className="pb-6">
      <h1 className="text-3xl font-medium mb-2">Update Chapter</h1>
      <Button 
        className="flex justify-start items-center h-6 mb-6 bg-slate-200 rounded-full hover:bg-slate-300" 
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="h-4 stroke-2 fill-gray-500" />
        <span className="ml-2">Back</span>
      </Button>

      <FormCreateChapter 
        initialValues={chapter}
        onSubmit={handleSubmit}
      >
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
      </FormCreateChapter>

      <ModalSuccessError
        isOpen={isModalOpen}
        isLoading={isPending} 
        isSuccess={isSuccess}
        isError={isError}
        closeModal={() => {
          closeModal();
          reset();
        }}
        successMessage="Berhasil mengupdate chapter!"
        errorMessage="Gagal mengupdate chapter!"
      />
    </div>
  );
};