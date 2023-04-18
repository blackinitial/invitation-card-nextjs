import React from 'react';

import { Couple } from '@/types';
import Image from 'next/image';
import { iconPaths } from '@/components/iconPaths';

type Props = {
  data: Couple
}

const Person = ({ person }: any) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image 
        src={person.photo} alt={`${person.status} picture`} 
        width={100} height={100} 
        className='rounded-full mb-6'/>
      <h2 className="text-3xl text-white mb-1">{person.name}</h2>
      <h3 className="text-xl italic text-rose-900 mb-6">{person.status}</h3>
      <div className="flex justify-center">
        {Object.keys(person.socmed).map((key) => (
          <a href={person.socmed[key]} className='hover:opacity-80 ml-3'>
            <div dangerouslySetInnerHTML={{ __html: iconPaths[key] }} />
          </a>
        ))}
        
      </div>
    </div>
  );
}

const Couple: React.FC<Props> = ({ data }) => {

  return (
    <div className='max-w-screen-md py-24 mx-auto'>
      <div className="text-center mb-12">
        <div className="font-display text-5xl text-white mb-5">{data.title}</div>
        <Image className="mx-auto" src="/assets/images/icons/separator.svg" alt="separator" width={200} height={30} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center text-center">
        <Person person={data.groom} />
        <span className='font-display text-6xl text-white my-12'>&</span>
        <Person person={data.bride} />
      </div>
    </div>
  );
};

export default Couple;
