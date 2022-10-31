import * as React from 'react';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <main>
        <section>
          <div className='layout flex min-h-screen max-w-screen-sm justify-center text-center dark:bg-primary-900 dark:text-primary-200'>
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
