import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

interface NextHeadProps {
  children?: React.ReactNode;
  title?: string;
  noIndex?: boolean;
  description?: string;
}

function NextHead({ title, noIndex, description }: NextHeadProps) {
  const { t } = useTranslation('header');
  const pageTitle = `${t('name')}${title ? ` - ${title}` : ''}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {description && <meta name="description" content={description} />}
    </Head>
  );
}

export default NextHead;
