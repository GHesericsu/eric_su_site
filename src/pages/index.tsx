import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

import Main from '@/pages/main';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <Main />
    </Layout>
  );
}
