import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Container } from '@/shared/assets/styles/layout';

function Index() {
  const { t } = useTranslation('header');
  return (
    <>
      <Head>
        <title>{t('name')}</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Container color={'black'}>
          <h1>{t('name')}</h1>
        </Container>
      </main>
    </>
  );
}

export default Index;
