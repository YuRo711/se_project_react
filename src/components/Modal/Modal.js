import { useEffect } from "react";
import "./Modal.css";

export const Modal = ({ name, onClose, closeButtonClass, type, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose(name);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose(name);
    }
  };

  return (
    <div className={`modal modal_type_${type}`}
        id={name}
        onClick={handleOverlay}
    >
      <div className={`modal__container modal_type_${type}__container`}>
        {children}
        <button className={`modal__close-button ${closeButtonClass}`}
            type="button"
            onClick={() => {
                onClose(name);
            }}
        />
      </div>
    </div>
  );
};


