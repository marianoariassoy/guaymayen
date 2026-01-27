import React from "react";

type PlayButtonProps = {
  size?: number;
  onClick?: () => void;
  className?: string;
};

const PlayButton: React.FC<PlayButtonProps> = ({
  size = 64,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Play video"
      className={`flex items-center justify-center rounded-full bg-black/60 hover:bg-black transition cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.45}
        height={size * 0.45}
        viewBox="0 0 24 24"
        fill="white"
      >
        <polygon points="5,3 19,12 5,21" />
      </svg>
    </button>
  );
};

export default PlayButton;
