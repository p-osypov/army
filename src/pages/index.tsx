import React from 'react';
import FirstScreen from '@/modules/home/first-screen';
import AboutUs from '@/modules/home/about-us';
import OurValues from '@/modules/home/our-values';
import Statistics from '@/modules/home/statistics';
import Vacancies from '@/modules/home/vacancies';
import Media from '@/modules/home/media';
import NextHead from '@/shared/components/next-head';

function Index() {
  return (
    <>
      <NextHead />
      <main>
        <FirstScreen />
        <AboutUs />
        <OurValues />
        <Statistics />
        <Media />
        <Vacancies />
      </main>
    </>
  );
}

export default Index;
