import type { AppProps } from 'next/app'
import './globals.css';
import { ThemeProvider } from '@emotion/react';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import theme from '@/theme';
import StoreProvider from '@/redux/StoreProvider';

 
export default function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <>
    <StoreProvider>
      <AppCacheProvider {...pageProps}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppCacheProvider>
    </StoreProvider>
    </>
  )
}