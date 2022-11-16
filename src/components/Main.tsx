import ButtonLink from '@/components/links/ButtonLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import NextImage from '@/components/NextImage';

export const Main = () => {
  return (
    <div className='layout flex max-w-screen-sm flex-col items-center text-center'>
      <div className='shadow-black drop-shadow-lg'>
        <NextImage
          useSkeleton
          src='/images/lisbon.jpg'
          width='500'
          height='350'
          alt='Eric Su'
        />
      </div>
      <div>
        <div className='top-1'>
          <h1 className='mt-4 inline-block'>
            Web<span className='animate-bounce '>3</span> Dev
          </h1>
          <p>
            It's Eric Su here. I worked on{' '}
            <PrimaryLink href='http://jetprotocol.io'>Jet Protocol</PrimaryLink>{' '}
            from July 2021 to July 2022.
          </p>
        </div>
      </div>

      <ButtonLink
        className='mt-6 hover:shadow-lg'
        href='/components'
        variant='dark'
      >
        See all components
      </ButtonLink>
    </div>
  );
};
