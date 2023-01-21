import React, { useContext } from "react";
import { stateContext } from "../../store/State";

const Modal = () => {
  const { modal, setModal, modalContent, setModalContent } =
    useContext(stateContext);
  const handleClose = () => {
    setTimeout(() => {
      setModalContent({});
      setModal(false);
    }, 250);
  };
  return (
    <>
      <input
        type="checkbox"
        id="client-modal"
        className="modal-toggle"
        checked={modal}
        onChange={() => setModal((state) => !state)}
      />
      <div className="modal">
        <div className="modal-box max-w-3xl">
          <h2 className="text-xl font-bold">{modalContent.title}</h2>
          <div className="my-5">{modalContent.body}</div>
          <div className="modal-action">
            <label htmlFor="client-modal" className="btn" onClick={handleClose}>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
