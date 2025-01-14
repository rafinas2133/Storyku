import { useState, useEffect } from "react";
import { ModalError } from "./ModalError";
import { ModalSuccess } from "./ModalSuccess";
import { Loading } from "./Loading";
import { Modal } from "./Modal";

export const ModalSuccessError = ({ 
  isOpen, 
  isLoading, 
  isSuccess, 
  isError, 
  closeModal, 
  successMessage, 
  errorMessage 
}) => {
  const [modalSize, setModalSize] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      setModalSize(window.innerWidth <= 768 ? "sm" : "lg");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null;

  return (
    <>
      {isLoading && (
        <Modal isOpen={isOpen} size={modalSize} closeModal={closeModal}>
          <div className="flex justify-center items-center h-40 text-center">
            <Loading size="lg" />
          </div>
        </Modal>
      )}
      
      {isSuccess && (
        <ModalSuccess
          isOpen={true}
          closeModal={closeModal}
          size={modalSize}
        >
          {successMessage}
        </ModalSuccess>
      )}

      {isError && (
        <ModalError
          isOpen={true}
          closeModal={closeModal}
          size={modalSize}
        >
          {errorMessage}
        </ModalError>
      )}
    </>
  );
};