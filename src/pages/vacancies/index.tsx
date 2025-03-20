import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Vacancies from 'src/modules/vacancies';
import NextHead from '@/shared/components/next-head';

function VacanciesIndex() {
  const { t } = useTranslation('vacancies');
  return (
    <>
      <NextHead title={t('label')} description={t('title')} />
      <main>
        <Vacancies />
      </main>
    </>
  );
}

export default VacanciesIndex;
