import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

const links = [
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className='bg-light-bg-200 sticky top-0 z-50 mb-5 dark:bg-dark-bg-1'>
      <div className='layout h-20 max-w-screen-sm flex-col justify-items-center'>
        <div className='relative py-2'>
          <h1 data-testid='ericsu' className='text-center'>
            Who is Eric Su?
          </h1>
          <div className='absolute right-0 top-5 hidden md:block'>
            <ThemeToggleButton />
          </div>
        </div>
        <div className='flex justify-center'>
          <div>
            <a
              href='https://github.com/GHesericsu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='mx-2 h-6 w-6 cursor-pointer hover:scale-110 dark:hover:text-blue-400 dark:active:text-blue-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {' '}
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
              </svg>
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/esericsu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='mx-2 h-6 w-6 cursor-pointer hover:scale-110 dark:hover:text-blue-400 dark:active:text-blue-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {' '}
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />{' '}
                <rect x='2' y='9' width='4' height='12' />{' '}
                <circle cx='4' cy='4' r='2' />
              </svg>
            </a>
          </div>
          <div>
            <a
              href='https://twitter.com/RealEricSu/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                className='mx-2 h-6 w-6 cursor-pointer hover:scale-110 dark:hover:text-blue-400 dark:active:text-blue-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                {' '}
                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='layout mb-2 flex h-8 max-w-screen-sm items-center justify-between'>
        <UnderlineLink
          href='/'
          className='font-bold hover:text-light-text-1 hover:dark:text-white'
        >
          Home
        </UnderlineLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnderlineLink href={href} className=''>
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
