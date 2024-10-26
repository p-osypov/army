import '@/shared/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/shared/components/header';
import Footer from '@/shared/components/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
