import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bandage',
  description: 'A sample ecommerce UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  )
}
