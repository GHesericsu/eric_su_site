import Layout from '@/components/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';

const Resume = () => {
  return (
    <Layout>
      <Seo title='Eric Su Resume'></Seo>
      <div className='flex flex-col items-center'>
        <h2>Eric Su Resume</h2>
        <div className='mt-2'>
          <PrimaryLink href='https://docs.google.com/document/d/1YlTVF3AbhIuLQmyPK1T71ZlOdDGXgWDV-YXt26RnLRs/edit?usp=sharing'>
            Link to Resume on Google Docs
          </PrimaryLink>
          {` It's easier to update on Google Docs.`}
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
