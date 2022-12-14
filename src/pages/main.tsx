import DevBio from '@/components/DevBio';
import NextImage from '@/components/NextImage';

const Main = () => {
  return (
    <div className='layout flex max-w-screen-sm flex-col items-center text-center'>
      <div className=''>
        <NextImage
          useSkeleton
          src='/images/eric_su_photo1.jpeg'
          width='300'
          height='200'
          alt='Eric Su'
          imgClassName='rounded-[50%] image-box-shadow'
        />
      </div>
      <div>
        <div className='top-1'>
          <DevBio />
        </div>
      </div>
    </div>
  );
};

export default Main;
