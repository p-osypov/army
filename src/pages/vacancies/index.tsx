import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import VacanciesPage from 'src/modules/vacancies';
import NextHead from '@/shared/components/next-head';

function VacanciesIndex() {
  const { t } = useTranslation('vacancies');
  return (
    <>
      <NextHead title={t('label')} description={t('title')} />
      <VacanciesPage />
    </>
  );
}

export default VacanciesIndex;
