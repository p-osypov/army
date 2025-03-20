import React from 'react';
import Login from '@/modules/login/login';
import NextHead from '@/shared/components/next-head';

function LoginIndex() {
  return (
    <>
      <NextHead title={'Авторизація'} noIndex />
      <main>
        <Login />
      </main>
    </>
  );
}

export default LoginIndex;
