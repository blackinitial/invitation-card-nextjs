import { LoadingLove } from '@/components/loading';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? <LoadingLove /> : <Component {...pageProps} />
}
