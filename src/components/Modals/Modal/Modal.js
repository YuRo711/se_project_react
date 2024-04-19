import { useEffect } from "react";
import "./Modal.css";

export function Modal(props) {
  const { onClose, name } = props;

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose(name);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, name]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose(name);
    }
  };

  return (
    <div className={props.isOpen ? 
          `modal modal_type_${props.type} modal_opened` : 
          `modal modal_type_${props.type}`}
        id={props.name}
        onClick={handleOverlay}
    >
      <div className={`modal__container modal_type_${props.type}__container`}>
        {props.children}
        <button className={`modal__close-button ${props.closeButtonClass}`}
            type="button"
            onClick={() => {
              onClose(name);
            }}
        />
      </div>
    </div>
  );
};


