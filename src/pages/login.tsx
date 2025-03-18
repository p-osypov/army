import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Login from '@/modules/login/login';

function LoginIndex() {
  const { t } = useTranslation('header');
  return (
    <>
      <Head>
        <title>{t('name')}</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <Login />
      </main>
    </>
  );
}

export default LoginIndex;
