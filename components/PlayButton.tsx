import { useRouter } from "next/router";
import React, { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/watch/${movieId}`);
      }}
      className="flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold transition bg-white rounded-md md:py-2 md:px-2 lg:text-lg hover:bg-neutral-300"
    >
      <BsFillPlayFill size={20} className="mr-1" />
      Play
    </button>
  );
};

export default PlayButton;
