import { Navbar } from '@/types';
import { useScrollPosition } from '@/utils/helper';
import Link from 'next/link';
import React from 'react';
import { iconPaths } from '@/components/iconPaths';

type Props = {
  data: Navbar
}

const Navbar: React.FC<Props> = ({ data }) => {
  const scrollY = useScrollPosition(60);
  const isScrollY = scrollY > 600;

  return (
    <nav className={`${!isScrollY ? '-translate-y-full' : 'translate-y-0'} w-full bg-white fixed t-0 z-50 py-3 rounded-br-2xl rounded-bl-2xl drop-shadow-lg transition ease-in-out`}>
      <div className="w-full font-display text-primary text-2xl text-center mb-3">
        <h2>{data.brand}</h2>
      </div>
      <ul className="flex flex-row justify-center flex-wrap gap-3">
        {data.nav.map((item, i) => (
          <li key={i} className="bg-tertiary hover:bg-accent text-white px-4 py-2 rounded-full">
            <Link href={`#${item.to}`} className='flex items-center gap-2'>
              <i dangerouslySetInnerHTML={{ __html: iconPaths[item.icon] }} className='block w-6 h-6 text-white'/>
              <span className='tracking-wide'>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
