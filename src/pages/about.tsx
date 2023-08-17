import Timeline from '@/components/aboutTimeLine/Timeline';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title='About Eric Su'></Seo>
      <div>
        <div>
          <h2 className='mb-3 text-2xl'>The Longer Version About Eric Su</h2>
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
