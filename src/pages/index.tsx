import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import FirstScreen from '@/modules/home/first-screen';

function Index() {
  const { t } = useTranslation('header');
  return (
    <>
      <Head>
        <title>{t('name')}</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <FirstScreen />
      </main>
    </>
  );
}

export default Index;
