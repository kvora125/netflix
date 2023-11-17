import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
export default function App({ 
  Component, 
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
  )
}
