import Banner from '@/components/Banner/Banner';
import Layout from '../components/RootLayout/Layout'
import Categories from '@/components/Categories/Categories';
import Posts from '@/components/Posts/Posts';
import Products from '@/components/Products/Products';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
import Cart from '@/components/Cart/Cart';
import { useAppSelector } from "@/redux/hooks";
import { Box, Snackbar } from "@mui/material";
import styles from './index.module.css'
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setCart } from '@/redux/features/cartSlice';
import { CartContents, LOCAL_STORAGE_KEYS } from '@/types/types';
import { getLocalStorage } from '@/utilities/utilities';
import { closeSnackbar } from '@/redux/features/snackbarSlice';
 
export default function Page() {
  const isCartOpen = useAppSelector((state) => state.cartReducer.cart.isOpen)
  const isSnackbarOpen = useAppSelector((state) => state.snackbarReducer.snackbar.isOpen)
  const snackbarMessage = useAppSelector((state) => state.snackbarReducer.snackbar.message)
  const dispatch = useAppDispatch()

  const handleSnackbarClose = () => {
    dispatch(closeSnackbar())
  }

  useEffect(() => {
    // Initialize redux states:
    const cartContents: CartContents = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEYS.CART) as string)
    dispatch(setCart(cartContents))
  }, [])

  return (
    <Box>
      {isCartOpen && <Cart/>}
      <Box className={isCartOpen ? styles.hideComponents : styles.showComponents}>
        <Categories/>
        <Products/>
        <Services/>
        <Posts/>
        <Testimonials/>
        <Banner/>
        <Snackbar 
          open={isSnackbarOpen}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
        />
      </Box>
    </Box>
  )
}
 
Page.getLayout = function getLayout(page: React.ReactNode) {
  return (
  <>
    <Layout>
        {page}
    </Layout>
  </>
  )
}