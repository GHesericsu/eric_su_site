import { Head, Html, Main, NextScript } from 'next/document';
import useTheme from 'next-theme';

function MyDocument() {
  const { theme } = useTheme();

  return (
    <Html lang='en' className={`${theme} md:text-[19px]` }>
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

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return { ...initialProps };
//   }

//   render() {
//     return (
//       <Html lang='en' className='dark'>
//         <Head>
//           <link
//             rel='preload'
//             href='/fonts/inter-var-latin.woff2'
//             as='font'
//             type='font/woff2'
//             crossOrigin='anonymous'
//           />
//         </Head>
//         <body className='bg-light-bg-200 text-light-text-800 dark:bg-dark-bg-900 dark:text-dark-text-200'>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

export default MyDocument;
