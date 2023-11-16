import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

const PlayButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push(`/auth`)}
      className="
        bg-[rgb(229,9,20)] 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-[1rem]
        text-white
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-[rgb(229,9,20)]
        transition
        "
      >
        Sign In
    </button>
  );
}

export default PlayButton;
