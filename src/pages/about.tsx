import Timeline from '@/components/aboutTimeLine/Timeline';
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h2 className='mb-3'>The Longer Version of About Me</h2>
        </div>
        <div>
          <Timeline />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
