import React from 'react';
import { Moment } from '@/types';
import Image from 'next/image';
import { iconPaths } from '@/components/iconPaths';

type Props = {
  data: Moment
}

const Photos = ({ images }: any) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {images.map((image, i: any) => (
        <Image 
          src={image.src} alt={`${image.i} picture`} key={i}
          width={320} height={200} 
          className='rounded-xl object-cover h-48 w-80'/>
      ))}
    </div>
  );
}

const Moment: React.FC<Props> = ({ data }) => {
  return (
    <div className='py-24 mx-auto rounded-3xl' id='moment'>
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <div className="font-display text-5xl text-white mb-5">{data.title}</div>
          <i dangerouslySetInnerHTML={{ __html: iconPaths['separator'] }} className='block text-white w-60 mx-auto'/>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-12">
          <Photos images={data.images} />
        </div>
        
      </div>
    </div>
  );
};

export default Moment;
