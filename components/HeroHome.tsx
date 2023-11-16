import React, { useCallback, useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import GetStarted from '@/components/GetStarted';
import useBillboard from '@/hooks/useBillboard';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import { CSSProperties } from 'react';
import EmailInput from '@/components/EmailInput';

const HeroHome: React.FC = () => {
  const[email, setEmail] = useState('');
  const { openModal } = useInfoModalStore();
  const { data } = useBillboard();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  const heroStyle: CSSProperties = {
    backgroundImage:'linear-gradient(to top, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)',
  }


  return (
    <div 
      className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover" 
    >
      <div className='h-full w-full' style={heroStyle}>
        <div className="absolute top-[37%] mx-auto w-full" >
          <p className="text-white text-lg text-center md:text-3xl h-full w-[80%] lg:text-5xl font-bold drop-shadow-xl mx-auto">
            Laughter. Tears. Thrills. Find it all on Netflix.
          </p>
          <p className="text-white text-[8px] text-center text-lg md:text-1xl lg:text-2xl h-full w-[80%] mt-2 md:mt-5 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl mx-auto">
          Endless entertainment starts here. Cancel anytime.
          </p>
          <p className="text-white text-[8px] text-center md:text-lg h-full w-[80%] mt-2 md:mt-5 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl mx-auto">
          Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-center items-center mt-1 md:mt-3 gap-3">
              <EmailInput 
                id="hero-home-email"
                label="Email adress"
                type="email"
                onChange={(e: any)=>setEmail(e?.target?.value)}
                value={email}
              />
              <GetStarted email={email} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroHome;
