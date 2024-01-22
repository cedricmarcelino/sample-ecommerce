import type { AppProps } from 'next/app'
import './globals.css';
import { ThemeProvider } from '@emotion/react';
import theme from '@/theme';
import StoreProvider from '@/redux/StoreProvider';
import Layout from '../components/RootLayout/Layout'

 
export default function App({ Component, pageProps }: AppProps) {
 
  return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
        </StoreProvider>
  )
}