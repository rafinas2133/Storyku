import React from "react";
import { FormCreateStory } from "../components/FormCreateStory";
import { Button } from "../components/@ui/Button";
import { useCreateStory } from "../hooks/story/useCreateStory";
import { useGetAllStory } from "../hooks/story/useGetAllStory";
import { ModalSuccessError } from "../components/@ui/ModalSuccessError";
import { useModal } from "../hooks/useModal";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useChapterContext } from '../context/ChapterContext';
import { useCreateChapters } from "../hooks/chapter/useCreateChapters";
import { TempChapterList } from "../components/ChapterList";

export const CreateStoryPage = () => {
  const { temporaryChapters, clearTemporaryChapters } = useChapterContext();
  const { refetch } = useGetAllStory();
  const { mutate: createStory, reset, isPending, isError, isSuccess } = useCreateStory();
  const { mutate: createChapter } = useCreateChapters();
  const { isModalOpen, closeModal, openModal } = useModal();

  const handleSubmit = async (data) => {
    openModal();
    createStory(data, {
      onSuccess: async (response) => {
        const storyId = response.id;
        
        for (const chapter of temporaryChapters) {
          await createChapter({ 
            storyId, 
            data: chapter 
          });
        }

        clearTemporaryChapters();
        refetch();
        setTimeout(() => {
          window.history.back();
        }, 2000);
      },
      onError: openModal,
    });
  };

  return (
    <div className="pb-6">
      <h1 className="text-3xl font-medium mb-2">Add Stories</h1>
      <Button 
        className="flex justify-start items-center h-6 mb-6 bg-slate-200 rounded-full hover:bg-slate-300" 
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="h-4 stroke-2 fill-gray-500" />
        <span className="ml-2">Back</span>
      </Button>
      
      <FormCreateStory onSubmit={handleSubmit}>
      <TempChapterList />
        <div className="flex justify-end gap-4 mt-6">
          <Button 
            type="button" 
            onClick={() => {
              clearTemporaryChapters();
              window.history.back();
            }}
            className="border border-slate-200 rounded-full hover:bg-slate-300"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="border border-slate-200 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          >
            Save
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
        successMessage="Berhasil menambahkan story dan chapter!"
        errorMessage="Gagal menambahkan story!"
      />
    </div>
  );
};