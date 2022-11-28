import * as React from 'react';

import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <main>
        <section>
          <div className='layout flex min-h-screen max-w-screen-sm justify-center text-center'>
            {children}
          </div>
        </section>
      </main>
    </>
  );
}
