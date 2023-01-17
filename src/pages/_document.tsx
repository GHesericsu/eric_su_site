import { Head, Html, Main, NextScript } from 'next/document';
import useTheme from 'next-theme';

function MyDocument() {
  const { theme } = useTheme();

  return (
    <Html lang='en' className={`${theme} md:text-[19px]`}>
      <Head>
        <link
          rel='preload'
          href='/fonts/inter-var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body className='bg-light-bg-1 text-light-text-1 dark:bg-dark-bg-1 dark:text-dark-text-1'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default MyDocument;
