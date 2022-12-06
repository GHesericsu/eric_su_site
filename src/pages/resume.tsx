import Layout from '@/components/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';

const Resume = () => {
  return (
    <Layout>
      <div>
        <PrimaryLink href='https://docs.google.com/document/d/1YlTVF3AbhIuLQmyPK1T71ZlOdDGXgWDV-YXt26RnLRs/edit?usp=sharing'>
          Link to Resume on Google Docs
        </PrimaryLink>
        . It's easier to update on Google Docs.
      </div>
    </Layout>
  );
};

export default Resume;
