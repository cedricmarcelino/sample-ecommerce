import StoreProvider from '@/redux/StoreProvider'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Box } from "@mui/material";
import styles from './Layout.module.css'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <Box className={styles.pageWrapper}>
      <Header/>
      {children}
      <Footer/>
    </Box>
  )
}