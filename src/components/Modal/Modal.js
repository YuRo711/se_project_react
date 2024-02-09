function Modal(props) {
  const isVisible = props.isVisible;
  const setVisibility = props.setVisibility;

  return (
      <div className={isVisible ? "Modal Modal_opened" : "Modal"}>
        {props.children}
      </div>
  );
}

export default Modal;