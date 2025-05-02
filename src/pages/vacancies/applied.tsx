import React from 'react';
import NextHead from '@/shared/components/next-head';
import useTranslation from 'next-translate/useTranslation';
import { SC } from '@/modules/vacancies/vacancies.styles';
function AppliedPage() {
  const { t } = useTranslation('vacancies');
  return (
    <SC.Section>
      <NextHead title={t('applied.title')} noIndex />
      <SC.Content>
        <SC.Applied.PageTitle>{t('applied.title')}</SC.Applied.PageTitle>
        <SC.Applied.PageDescription>
          {t('applied.description')}
        </SC.Applied.PageDescription>
        <SC.Applied.ReturnHomeButton href={'/'}>
          {t('applied.returnHome')}
        </SC.Applied.ReturnHomeButton>
      </SC.Content>
    </SC.Section>
  );
}

export default AppliedPage;
