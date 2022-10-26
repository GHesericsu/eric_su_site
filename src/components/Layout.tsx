import Header from '@/components/Header';
import * as React from 'react';
import { Footer } from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
        <main>
          <section>
            <div className='layout flex max-w-screen-sm justify-center text-center dark:bg-primary-900 dark:text-primary-200 min-h-screen'>
              {children}
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}
