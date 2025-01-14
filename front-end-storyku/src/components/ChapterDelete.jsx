import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { ButtonPrimary, ButtonSecondary } from "./@ui/Button";
import { Loading } from "./@ui/Loading";
import { Modal } from "./@ui/Modal";
import { ModalSuccessError } from "./@ui/ModalSuccessError";
import { useDeleteChapters } from "../hooks/chapter/useDeleteChapters";
import { useGetAllChapters } from "../hooks/chapter/useGetAllChapters";
import { useParams } from "react-router-dom";

export const ChapterDelete = ({ isOpen, closeModal, chapter, onDelete }) => {
    const { id: storyId } = useParams();
    const { refetch } = useGetAllChapters(storyId);
    const { mutate, isPending, isError, isSuccess, reset} = useDeleteChapters();
    
    if (!chapter) return null;
    const isTemp = chapter.id.toString().startsWith('temp-');

    const handleSubmit = () => {
        if (isTemp) {
            onDelete();
        } else {
        mutate({ 
            storyId, 
            chaptersId: chapter.id,
            data: {
                title: chapter.title,
                story: chapter.story
            }
        }, {
            onSettled: closeModal,
            onSuccess: handleRefetch,
        });
        }
    };

    const handleRefetch = () => {
        refetch();
    };

    return (
        <>
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="text-center">
                <ExclamationCircleIcon className="w-32 mx-auto fill-yellow-300" />
                <span className="inline-block my-4 text-lg font-medium">
                    Apakah yakin akan menghapus chapter ini?
                </span>

                {isPending ? (
                    <Loading size="lg" />
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        <ButtonPrimary
                            onClick={closeModal}
                            className="rounded-lg "
                        >
                            Batal
                        </ButtonPrimary>
                        <ButtonSecondary
                            onClick={handleSubmit}
                            className="rounded-lg bg-red-600 hover:bg-red-700 text-white" 
                        >
                            Ya, hapus
                        </ButtonSecondary>
                    </div>
                )}
            </div>
        </Modal>

        <ModalSuccessError
            isSuccess={isSuccess}
            isError={isError}
            closeModal={reset}
            successMessage={`Berhasil menghapus chapter`}
            errorMessage={`Gagal menghapus chapter`}
        />
        </>
    );
};