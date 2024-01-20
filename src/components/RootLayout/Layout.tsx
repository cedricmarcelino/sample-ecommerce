import StoreProvider from '@/redux/StoreProvider'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { Box } from "@mui/material";
import styles from './Layout.module.css'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <Box className={styles.pageWrapper}>
            <Header/>
            {children}
            <Footer/>
          </Box>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  )
}