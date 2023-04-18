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
        className='rounded-full mb-8'/>
      <h2 className="capitalize text-5xl text-white mb-4">{person.name}</h2>
      <p className="text-base text-white mb-4">{person.description}</p>
      <h3 className="text-xl italic text-secondary mb-8">{person.status}</h3>
      <div className="flex justify-center gap-4">
        {Object.keys(person.socmed).map((key) => (
          <a href={person.socmed[key]} className='text-rose-100 hover:text-rose-200'>
            <div dangerouslySetInnerHTML={{ __html: iconPaths[key] }} className='block w-6 h-6' />
          </a>
        ))}
        
      </div>
    </div>
  );
}

const Couple: React.FC<Props> = ({ data }) => {

  return (
    <div className='max-w-screen-md py-24 mx-auto' id='couple'>
      <div className="text-center mb-12">
        <div className="font-display text-5xl text-white mb-5">{data.title}</div>
        <i dangerouslySetInnerHTML={{ __html: iconPaths['separator'] }} className='block text-white w-60 mx-auto'/>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <Person person={data.groom} />
        <span className='font-display text-6xl text-white my-12'>&</span>
        <Person person={data.bride} />
      </div>
    </div>
  );
};

export default Couple;
