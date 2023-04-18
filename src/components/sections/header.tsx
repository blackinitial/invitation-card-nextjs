import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import { useScrollPosition } from '@/utils/helper';
import { Header } from '@/types';
import Image from 'next/image';

type Props = {
  data: Header,
  firstOpen: boolean,
  setFirstOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = ({ data, firstOpen, setFirstOpen }) => {
  const renderBackground = () => {

    const isPortrait = window.innerHeight > window.innerWidth;
    const backgrounds = isPortrait ? data.bgImagePortrait : data.bgImageLandscape;
    const imgSize = isPortrait ? { width: 200, height: 450 } : { width: 750, height: 500 }

    return (
      <div className="absolute top-0 left-0 h-full w-full -z-20">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade" autoplay>
          {backgrounds.map((item, i) => (
            <SwiperSlide className='background' key={i}>
              {firstOpen && <div className="dark"></div>}
              <Image src={item} alt={`bg-${item}`} width={imgSize.width} height={imgSize.height}
                quality={90} className='h-screen w-screen object-cover' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  const scrollY = useScrollPosition(60);

  const renderContent = () => {
    return (
      <div className="min-h-screen max-w-screen-md flex flex-col justify-center items-center text-center m-auto text-white">
        <div className="font-display text-8xl mb-12">{data.bridegroom}</div>
        <div className="text-2xl mb-3">{data.desc}</div>
        <Image src="/assets/images/icons/separator.svg" alt="separator" width={200} height={30} />
        <div className="text-4xl bg-clip-text text-transparent bg-gradient-to-br from-rose-300 to-rose-600 capitalize mb-12">{data.date}</div>
        {firstOpen ? (
          <div className="flex-row justify-center items-center px-16 py-6 bg-white rounded-3xl">
            <div className="text-xl text-slate-500 mb-3">{data.line1}</div>
            <h1 className="font-mono text-4xl text-secondary mb-3">Receiver</h1>
            <div className="text-xl text-slate-500 mb-6">{data.line2}</div>
            <button
              className="font-medium tracking-wide text-white transition duration-200 rounded-xl shadow-md bg-primary px-6 py-3 hover:bg-secondary focus:shadow-outline focus:outline-none"
              onClick={() => { setFirstOpen(false) }}>
              {data.button}
            </button>
          </div>
        ) : (
          <div>
            <h1>Counter data</h1>
            <h1>Dibuka</h1>
          </div>
        )}

        {!firstOpen && scrollY < 200 && (
          <div className="absolute bottom-4 animate-bounce">
            <Image src="/assets/images/icons/arrow.png" alt="arrow-icons" width={40} height={100} />
          </div>
        )}
      </div>
    );
  };

  return (
    <header id="header">
      {renderBackground()}
      {renderContent()}
      <div className="overlay -z-10"></div>
    </header>
  );
};

export default Header;
