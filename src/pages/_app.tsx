import '@/shared/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';
import Contacts from '@/shared/components/contacts';
import { LocalStorageProvider } from '@/shared/context/local-storage';
import { AuthProvider } from '@/shared/context/auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalStorageProvider>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Contacts />
        <Footer />
      </AuthProvider>
    </LocalStorageProvider>
  );
}
