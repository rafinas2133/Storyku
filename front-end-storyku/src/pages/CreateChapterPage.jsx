import React from "react";
import { Button } from "../components/@ui/Button";
import { useCreateStory } from "../hooks/story/useCreateStory";
import { useGetAllStory } from "../hooks/story/useGetAllStory";
import { ModalSuccessError } from "../components/@ui/ModalSuccessError";
import { useModal } from "../hooks/useModal";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { FormCreateChapter } from "../components/FormCreateChapter";
import { useChapterContext } from '../context/ChapterContext';

export const CreateChapterPage = () => {
  const { addTemporaryChapter } = useChapterContext();
  const { isModalOpen, closeModal, openModal } = useModal();

  const handleSubmit = (data) => {
    addTemporaryChapter(data);
    window.history.back();
  };

  return (
    <div className="pb-6">
      <h1 className="text-3xl font-medium mb-2">Add Chapter</h1>
      <Button 
        className="flex justify-start items-center h-6 mb-6 bg-slate-200 rounded-full hover:bg-slate-300" 
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="h-4 stroke-2 fill-gray-500" />
        <span className="ml-2">Back</span>
      </Button>
      
      <FormCreateChapter onSubmit={handleSubmit}>
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
            Save
          </Button>
        </div>
      </FormCreateChapter>
    </div>
  );
};