import Product from '@/components/Product/Product'
import { Product as IProduct } from '@/redux/features/productsSlice'
import Layout from '@/components/RootLayout/Layout'
import { GetServerSidePropsContext } from 'next/types';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Cart from '@/components/Cart/Cart';
import styles from './index.module.css'
import { Box, Snackbar } from "@mui/material";
import { useEffect } from 'react';
import { CartContents, LOCAL_STORAGE_KEYS, WishlistContents } from '@/types/types';
import { setCart, toggleCart } from '@/redux/features/cartSlice';
import { getLocalStorage } from '@/utilities/utilities';
import { closeSnackbar } from '@/redux/features/snackbarSlice';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import { toggleMenu } from '@/redux/features/hamburgerMenuSlice';
import { setWishlist, toggleWishlist } from '@/redux/features/wishlistSlice';
import Wishlist from '@/components/Wishlist/Wishlist';

  
export async function getServerSideProps(context: GetServerSidePropsContext) {
const { id } = context.query;
const res = await fetch(`https://dummyjson.com/products/${id}`);
const product = await res.json();
return { props: product };
}

export default function Page(props: IProduct)  {
    const isCartOpen = useAppSelector((state) => state.cartReducer.cart.isOpen)
    const isHamburgermenuOpen = useAppSelector((state) => state.hamburgerMenuReducer.hamburgerMenu.isOpen)
    const dispatch = useAppDispatch()
    const isSnackbarOpen = useAppSelector((state) => state.snackbarReducer.snackbar.isOpen)
    const snackbarMessage = useAppSelector((state) => state.snackbarReducer.snackbar.message)
    const isWishlistOpen = useAppSelector((state) => state.wishlistReducer.wishlist.isOpen)

    const handleSnackbarClose = () => {
      dispatch(closeSnackbar())
    }
  
    useEffect(() => {
      // Initialize redux states:
      const cartContents: CartContents = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEYS.CART) as string)
      const wishlistContents: WishlistContents = JSON.parse(getLocalStorage(LOCAL_STORAGE_KEYS.WISHLIST) as string)
      dispatch(setCart(cartContents))
      dispatch(setWishlist(wishlistContents))
    }, [])
  
    useEffect(() => {
      dispatch(toggleWishlist(false))
      dispatch(toggleCart(false))
      dispatch(toggleMenu(false))
    }, [props])

    return (
        <Layout>
            {isCartOpen && <Cart/>}
            {isWishlistOpen && <Wishlist/>}
            {isHamburgermenuOpen && <MobileMenu/>}
            <Box className={(isCartOpen || isHamburgermenuOpen || isWishlistOpen) ? styles.hideComponents : styles.showComponents} >
                <Product product={props}/>
            </Box>
            <Snackbar 
            open={isSnackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
            />
        </Layout>
    )
}