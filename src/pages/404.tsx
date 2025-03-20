import React from 'react';
import { SC } from '@/modules/error-page/error-page.styles';
import Message from '@/modules/error-page/message';
import NextHead from '@/shared/components/next-head';
import useTranslation from 'next-translate/useTranslation';

function ErrorPage() {
  const { t } = useTranslation('common');
  return (
    <SC.PageContainer>
      <NextHead title={t('pageNotFound')} noIndex />
      <SC.Main>
        <Message />
      </SC.Main>
    </SC.PageContainer>
  );
}

export default ErrorPage;
