import useTheme from 'next-theme';
import * as React from 'react';

import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <main className={'z-0' + theme === 'dark' ? 'wavesDark' : 'wavesLight'}>
        <section>
          <div className='layout flex min-h-screen max-w-screen-sm justify-center text-center'>
            {children}
          </div>
        </section>
      </main>
    </>
  );
}
