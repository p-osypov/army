'use client';

import { SC } from '@/modules/admin/admin.styles';
import { useAuth } from '@/shared/context/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useLocalStorageContext } from '@/shared/context/local-storage';
import { Title } from '@/shared/assets/styles/layout';
import Sidebar from '@/modules/admin/sidebar/sidebar';

const AdminPanelPage = () => {
  const router = useRouter();
  const { lsInitialized } = useLocalStorageContext();
  const { username } = useAuth();

  useEffect(() => {
    if (lsInitialized && !username) {
      router.push('/login');
    }
  }, [lsInitialized, username, router]);

  if (!username) return <React.Fragment />;
  return (
    <SC.Container>
      <Title.H1>Адміністративна панель</Title.H1>
      <SC.Content>
        <Sidebar />
      </SC.Content>
    </SC.Container>
  );
};

export default AdminPanelPage;
