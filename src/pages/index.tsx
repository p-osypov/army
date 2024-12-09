import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import FirstScreen from '@/modules/home/first-screen';
import AboutUs from '@/modules/home/about-us';
import OurValues from '@/modules/home/our-values';
import Team from '@/modules/home/team';
import Analytics from '@/modules/home/analytics';

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
        <AboutUs />
        <OurValues />
        <Team />
        <Analytics />
      </main>
    </>
  );
}

export default Index;
