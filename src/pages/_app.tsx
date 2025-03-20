import '@/shared/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import Contacts from '@/shared/components/contacts';
import { LocalStorageProvider } from '@/shared/context/local-storage';
import { AuthProvider } from '@/shared/context/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

interface ClientRoutesGuardProps {
  children: React.ReactNode;
}

function ClientRoutesGuard({ children }: ClientRoutesGuardProps) {
  const router = useRouter();

  const hideClientContent =
    router.pathname === '/login' || router.pathname === '/admin';

  return (
    <>
      {children}
      {!hideClientContent && <Contacts />}
      <Footer hideContent={hideClientContent} />
    </>
  );
}
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const pageLayoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      if (pageLayoutRef.current) {
        pageLayoutRef.current.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <LocalStorageProvider>
      <AuthProvider>
        <Header />
        <ClientRoutesGuard>
          <Component {...pageProps} ref={pageLayoutRef} />
        </ClientRoutesGuard>
      </AuthProvider>
    </LocalStorageProvider>
  );
}
