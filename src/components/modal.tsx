import ReactPlayer from "react-player";

const Modal = ({
  setOpenModal,
}: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-lg flex items-center justify-center p-4 fade-in-fast"
      onClick={() => setOpenModal(false)}
    >
      <div className="w-full max-w-5xl aspect-video shadow-2xl bg-black">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=iBG1n1hZMPc"
          playing={true}
          loop={true}
          width="100%"
          height="100%"
          className="h-full w-full"
        />
      </div>
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-foreground transition cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
};

export default Modal;
