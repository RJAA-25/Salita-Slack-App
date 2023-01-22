import React, { useContext } from "react";
import { stateContext } from "../../store/State";

const Modal = () => {
  const { modal, setModal, modalContent } = useContext(stateContext);

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
        </div>
      </div>
    </>
  );
};

export default Modal;
