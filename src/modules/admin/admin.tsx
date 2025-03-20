'use client';

import { SC } from '@/modules/admin/admin.styles';
import { useAuth } from '@/shared/context/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AdminPanel = () => {
  const router = useRouter();
  const { username } = useAuth();

  useEffect(() => {
    if (!username) {
      router.push('/login');
    }
  }, [username, router]);

  return (
    <SC.Container>
      <SC.Title>Адмін панель</SC.Title>
    </SC.Container>
  );
};

export default AdminPanel;
