import React from "react";
import { Portal } from "./Portal";
import style from "./style.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = (props: {
  children: React.ReactElement;
  isOpen: boolean;
  caption: string;
  onClose: () => void;
}): React.ReactElement => {
  const { isOpen, onClose } = props;

  const modalOverlay = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const { current } = modalOverlay;

    const clickHandle = (e: Event) => {
      if (e.target === current) {
        onClose();
      }
    };

    const keyHandle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (current) {
      current.addEventListener("click", clickHandle);
      window.addEventListener("keyup", keyHandle);
    }

    return () => {
      if (current) {
        current.removeEventListener("click", clickHandle);
      }
      window.removeEventListener("keyup", keyHandle);
    };
  }, [open, onClose]);

  return (
    <>
      {isOpen && (
        <Portal className={"modal"}>
          <div ref={modalOverlay} className={style.modal}>
            <div className={`${style.modalContent} p-10 pt-10 pb-15`}>
              <div className={`${style.modalBody} pt-2 pb-2`}>
                <div className={style.modalHeader}>
                  <p className="text text_type_main-large">{props.caption}</p>
                  <div className={style.modalClose}>
                    <CloseIcon type="primary" onClick={onClose} />
                  </div>
                </div>
              </div>
              {props.children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
