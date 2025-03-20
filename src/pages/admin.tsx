import Head from 'next/head';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import AdminPanel from '@/modules/admin/admin';

function AdminPanelIndex() {
  const { t } = useTranslation('header');
  return (
    <>
      <Head>
        <title>{t('name')}</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <AdminPanel />
      </main>
    </>
  );
}

export default AdminPanelIndex;
