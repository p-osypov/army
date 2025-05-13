import '@/shared/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import Contacts from '@/shared/components/contacts';
import { LocalStorageProvider } from '@/shared/context/local-storage';
import { AuthProvider } from '@/shared/context/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Head from 'next/head';

interface ClientRoutesGuardProps {
  children: React.ReactNode;
}

function ClientRoutesGuard({ children }: ClientRoutesGuardProps) {
  const router = useRouter();

  const hideClientContent =
    router.pathname === '/login' || router.pathname === '/admin';

  return (
    <React.Fragment>
      <main>
        {children}
        {!hideClientContent && <Contacts />}
      </main>
      <Footer hideContent={hideClientContent} />
    </React.Fragment>
  );
}
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <LocalStorageProvider>
      <AuthProvider>
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <Header />
        <ClientRoutesGuard>
          <Component {...pageProps} />
        </ClientRoutesGuard>
      </AuthProvider>
    </LocalStorageProvider>
  );
}
