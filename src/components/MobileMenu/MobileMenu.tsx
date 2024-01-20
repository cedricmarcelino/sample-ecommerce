import { Box, Typography } from "@mui/material"
import styles from './MobileMenu.module.css'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleMenu } from "@/redux/features/hamburgerMenuSlice"
import { CartIcon, Heart, SearchIcon, UserIcon } from "../Icons"
import { toggleCart } from "@/redux/features/cartSlice"
import { toggleWishlist } from "@/redux/features/wishlistSlice"

export default function MobileMenu() {
    const [windowWidth, setWindowWidth] = useState(0)
    const dispatch = useAppDispatch()
    const pathname = usePathname()
    const isCartOpen = useAppSelector((state) => state.cartReducer.cart.isOpen)
    const cartCount = useAppSelector((state) => state.cartReducer.cart.cartContents.length)
    const wishlistCount = useAppSelector((state) => state.wishlistReducer.wishlist.wishlistContents.length)
    const isWishlistOpen = useAppSelector((state) => state.wishlistReducer.wishlist.isOpen)

    const handleAutoClose = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        addEventListener('resize', handleAutoClose);
        return (() => {removeEventListener('resize', handleAutoClose)})
    }, [])

    useEffect(() => {
        if (windowWidth >= 1440) {
            dispatch(toggleMenu(false))
        }
    }, [windowWidth])

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

    return(
            <Box className={styles.navMenu}>
                {pathname.includes('/product/')
                ? 
                <>
                    <Typography className={styles.navLink}>
                        Home
                    </Typography>
                    <Typography className={styles.navLink}>
                        Shop
                    </Typography>
                    <Typography className={styles.navLink}>
                        About
                    </Typography>
                    <Typography className={styles.navLink}>
                        Blog
                    </Typography>
                    <Typography className={styles.navLink}>
                        Contact
                    </Typography>
                    <Typography className={styles.navLink}>
                        Pages
                    </Typography>
                    <Box className={styles.loginContainer}>
                        <UserIcon width={27}/>
                        <Typography className={styles.loginLabel} color='#23A6F0'>
                            Login / Register
                        </Typography>
                    </Box>
                    <SearchIcon width={34}/>
                    <Box className={styles.cartContainer} onClick={handleCartClick}>
                        <CartIcon width={37}/>
                        <Typography variant='caption' color='#23A6F0'>{cartCount}</Typography>
                    </Box>
                    <Box className={styles.wishlistContainer} onClick={handleWishlistClick}>
                        <Heart width={29}/>
                        <Typography variant='caption' color='#23A6F0'>{wishlistCount}</Typography>
                    </Box>
                </>
                :
                <>
                    <Typography className={styles.navLink}>
                        Home
                    </Typography>
                    <Typography className={styles.navLink}>
                        Product
                    </Typography>
                    <Typography className={styles.navLink}>
                        Pricing
                    </Typography>
                    <Typography className={styles.navLink}>
                        Contact
                    </Typography>
                </>
                }
            </Box>
        )
}