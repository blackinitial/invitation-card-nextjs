import React from 'react';
import { Location } from '@/types';

type Props = {
  data: Location
}

const Location: React.FC<Props> = ({ data }) => {
  return (
    <div className='bg-rose-100 py-24 mx-auto rounded-3xl' id='location'>
      <div className="mx-auto">
        <div className="text-center mb-12">
          <div className="font-display text-5xl text-primary mb-5">{data.title}</div>
        </div>
        <div className='flex justify-center mx-auto' style={{ width: '90vw' }}>
          <iframe title={data.title} src={data.maps} style={{ width: 500, height: 300 }} className='rounded-xl' />
        </div>
        
      </div>
    </div>
  );
};

export default Location;
