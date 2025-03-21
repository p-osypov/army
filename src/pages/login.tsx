import React from 'react';
import LoginPage from '@/modules/login/login.page';
import NextHead from '@/shared/components/next-head';

function LoginIndex() {
  return (
    <>
      <NextHead title={'Авторизація'} noIndex />
      <main>
        <LoginPage />
      </main>
    </>
  );
}

export default LoginIndex;
