import React from 'react';
import AdminPanelPage from '@/modules/admin/admin.page';
import NextHead from '@/shared/components/next-head';

function AdminPanelIndex() {
  return (
    <React.Fragment>
      <NextHead title={'Адміністративна панель'} noIndex />
      <AdminPanelPage />
    </React.Fragment>
  );
}

export default AdminPanelIndex;
