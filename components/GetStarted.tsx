import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

interface InputProps {
  email?: string;
}

const GetStarted:React.FC<InputProps> = ({email}) => {
  const router = useRouter();

  return (
    <button 
      onClick={() => {
        window.sessionStorage.setItem("registerEmail",email || '');
        console.log(document?.getElementById("hero-home-email"));
        router.push(`/auth`);
      }}
      className="
        bg-[rgb(229,9,20)] 
        rounded-[3px] 
        py-[0.5rem] md:py-[0.7rem] 
        px-4 md:px-6
        w-auto 
        text-lg md:text-xl
        text-white
        font-bold
        flex
        flex-row
        items-center
        hover:bg-[rgb(229,9,20)]
        transition
        "
      >
        Get Started
        <ChevronRightIcon className="w-4 md:w-7 font-bold mr-1"  />

    </button>
  );
}

export default GetStarted;
