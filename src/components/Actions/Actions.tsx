import { Box, Typography } from "@mui/material"
import { CartIcon, Close, HamburgerIcon, Heart, SearchIcon, UserIcon } from "../Icons"
import styles from './Actions.module.css'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleMenu } from "@/redux/features/hamburgerMenuSlice"
import { toggleCart } from "@/redux/features/cartSlice"
import { usePathname } from "next/navigation"
import { toggleWishlist } from "@/redux/features/wishlistSlice"

export default function Actions() {
    const cartCount = useAppSelector((state) => state.cartReducer.cart.cartContents.length)
    const isHamburgermenuOpen: boolean = useAppSelector((state) => state.hamburgerMenuReducer.hamburgerMenu.isOpen)
    const dispatch = useAppDispatch();
    const isCartOpen = useAppSelector((state) => state.cartReducer.cart.isOpen)
    const isWishlistOpen = useAppSelector((state) => state.wishlistReducer.wishlist.isOpen)
    const wishlistCount = useAppSelector((state) => state.wishlistReducer.wishlist.wishlistContents.length)
    const pathname = usePathname()

    const handleClick = () => {
        dispatch(toggleMenu(!isHamburgermenuOpen))
        dispatch(toggleCart(false))
        dispatch(toggleWishlist(false))
    }

    const handleCartClick = () => {
        dispatch(toggleCart(!isCartOpen))
        dispatch(toggleMenu(false))
        dispatch(toggleWishlist(false))
    }

    const handleWishlistClick = () => {
        dispatch(toggleWishlist(!isWishlistOpen))
        dispatch(toggleCart(false))
        dispatch(toggleMenu(false))
    }
    return (
        <Box className={(pathname.includes('/product/') && isHamburgermenuOpen) ? styles.iconContainerAlt : styles.iconContainer}>
            <Box className={styles.loginContainer}>
                <UserIcon className={styles.userIcon}/>
                <Typography variant='h6' color='#23A6F0'>
                    Login / Register
                </Typography>
            </Box>
            {!(isHamburgermenuOpen && pathname.includes('/product/')) && 
                <>
                    <SearchIcon className={styles.svgIcon}/>
                    <Box className={styles.cartContainer} onClick={handleCartClick}>
                        <CartIcon className={styles.cartIcon}/>
                        <Typography variant='caption'>{cartCount}</Typography>
                    </Box>
                </>
            }
            <Box className={styles.wishlistContainer}>
                <Heart className={styles.heartIcon} onClick={handleWishlistClick}/>
                <Typography variant='caption'>{wishlistCount}</Typography>
            </Box>
            {isHamburgermenuOpen
            ?
            <>
                <Close className={styles.closeIcon} onClick={handleClick}/>
            </>
            :
            <HamburgerIcon className={styles.hamburgerIcon} onClick={handleClick}/>}
        </Box>
    )
}