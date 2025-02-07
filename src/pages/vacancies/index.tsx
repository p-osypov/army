import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Vacancies from 'src/modules/vacancies';

function VacanciesIndex() {
  const { t } = useTranslation('header');
  return (
    <>
      <Head>
        <title>{t('name')}</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Vacancies />
      </main>
    </>
  );
}

export default VacanciesIndex;
