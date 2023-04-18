import React from 'react';
import { Events } from '@/types';
import Image from 'next/image';
import { iconPaths } from '@/components/iconPaths';

type Props = {
  data: Events
}

const Card = ({ event }: any) => {
  console.log(event)
  return (
    <div className="flex flex-col justify-center items-center">
      <Image 
        src={event.photo} alt={`${event.title} picture`} 
        width={250} height={200} 
        className='rounded-xl mb-8 object-cover h-40 w-80'/>
      <h2 className="text-3xl text-secondary mb-8">{event.title}</h2>

      <div className="flex flex-col items-center gap-2 mb-8">
        <i dangerouslySetInnerHTML={{ __html: iconPaths['event'] }} className='text-rose-400'/>
        <div className=''>
          <h3 className="text-xl italic text-rose-500">{event.date}</h3>
          <h3 className="text-xl italic text-rose-400">{event.time}</h3>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-2 mb-6">
        <i dangerouslySetInnerHTML={{ __html: iconPaths['location'] }} className='text-rose-400'/>
        <pre className="font-serif text-lg text-rose-500 ">{event.address}</pre>
      </div>
    </div>
  );
}

const Events: React.FC<Props> = ({ data }) => {
  return (
    <div className='bg-rose-100 py-24 mx-auto rounded-3xl' id='events'>
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <div className="font-display text-5xl text-primary mb-5">{data.title}</div>
          <i dangerouslySetInnerHTML={{ __html: iconPaths['separator'] }} className='block text-primary w-60 mx-auto'/>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-12">
          <Card event={data.ceremony} />
          <Card event={data.reception} />
        </div>
        
      </div>
    </div>
  );
};

export default Events;
