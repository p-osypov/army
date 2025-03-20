import React from 'react';
import AdminPanel from '@/modules/admin/admin';
import NextHead from '@/shared/components/next-head';

function AdminPanelIndex() {
  return (
    <>
      <NextHead title={'Адміністративна панель'} noIndex />
      <main>
        <AdminPanel />
      </main>
    </>
  );
}

export default AdminPanelIndex;
