const Modal = ({ openModal, onClose }) => {
  if (!openModal) {
    return null;
  }

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <img className="image-modal" src="./hero-image.webp" alt="img" />
        <div className="right-side-modal">
          <p onClick={onClose} className="close-modal">
            X
          </p>
          <div className="content">
            <p>do you want a</p>
            <h1>$20 credit</h1>
            <p>for your first trade</p>
          </div>
          <div className="btn-container">
            <button className="btn-primary">yes I love Nft's</button>
            <button className="btn-outline">no thanks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
