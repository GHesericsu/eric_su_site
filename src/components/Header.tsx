import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const links = [
  { href: '/about', label: 'about' },
  { href: '/components', label: 'components' },
];

export default function Header(props: any) {
  return (
    <header className='sticky top-0 bg-primary-200 dark:bg-primary-800 dark:text-primary-200 z-10'>
      <div className='layout flex h-14 max-w-screen-sm items-center justify-center'>
        <h1>Who is Eric Su?</h1>
      </div>
      <div className='layout flex h-8 max-w-screen-sm items-center justify-between mb-2'>
        <UnderlineLink href='/' className='font-bold hover:text-white'>
          Home
        </UnderlineLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className='hover:text-white'>
                  {label}
                </UnderlineLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
