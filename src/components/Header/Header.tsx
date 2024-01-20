'use client'
import { Box, Typography } from "@mui/material"
import styles from './Header.module.css'
import { SearchIcon, CartIcon, HamburgerIcon, Close, Envelope, Phone, Youtube, Facebook, Twitter, Instagram, Heart, UserIcon } from "../Icons"
import { useState } from "react"
import Navigation from "../Navigation/Navigation"
import React from "react"
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleCart } from "@/redux/features/cartSlice";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()
    const dispatch = useAppDispatch();
    const isCartOpen = useAppSelector((state) => state.cartReducer.cart.isOpen)
    const cartCount = useAppSelector((state) => state.cartReducer.cart.cartContents.length)
    
    if(isCartOpen){
        window.scrollTo(0, 0)
    }


    const handleBrandClick = () => {
        router.push('/');
        dispatch(toggleCart(false))
    }

    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    const handleCartClick = () => {
        dispatch(toggleCart(!isCartOpen))
    }
    return (
        <Box>
            <Box className={styles.headerBanner}>
                <Box className={styles.contactsContainer}>
                    <Box className={styles.contactNumberContainer}>
                        <Phone width={16} className={styles.phoneIcon}/>
                        <Typography variant='h6' color='#FFFFFF'>
                            (225) 555-0118
                        </Typography>
                    </Box>
                    <Box className={styles.emailContainer}>
                        <Envelope width={16} className={styles.envelopeIcon}/>
                        <Typography variant='h6' color='#FFFFFF'>
                            michelle.rivera@example.com
                        </Typography>
                    </Box>
                </Box>
                <Typography variant='h6' color='#FFFFFF'>
                    Follow Us  and get a chance to win 80% off
                </Typography>
                <Box className={styles.socialsContainer}>
                    <Typography variant='h6' color='#FFFFFF'>
                        Follow Us :
                    </Typography>
                    <Box className={styles.socialsIconContainer}>
                        <Instagram className={styles.socialsIcon} width={16}/>
                        <Youtube className={styles.socialsIcon} width={16}/>
                        <Facebook className={styles.socialsIcon} width={16}/>
                        <Twitter className={styles.socialsIcon} width={16}/>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.headerRoot}>
                <Box className={styles.brandNameContainer} onClick={handleBrandClick}>
                    <Typography variant='h3'>Bandage</Typography>
                </Box>
                <Box className={styles.actionsContainer}>
                    <Navigation isVisible={isVisible}/>
                    <Box className={styles.iconContainer}>
                        <Box className={styles.loginContainer}>
                            <UserIcon className={styles.userIcon}/>
                            <Typography variant='h6' color='#23A6F0'>
                                Login / Register
                            </Typography>
                        </Box>
                        <SearchIcon className={styles.svgIcon}/>
                        <Box className={styles.cartContainer} onClick={handleCartClick}>
                            <CartIcon className={styles.cartIcon}/>
                            <Typography variant='caption'>{cartCount}</Typography>
                        </Box>
                        {isVisible 
                        ? 
                        <Close className={styles.closeIcon} onClick={handleClick}/>
                        :
                        <HamburgerIcon className={styles.hamburgerIcon} onClick={handleClick}/>}
                        <Box className={styles.favoritesContainer}>
                            <Heart className={styles.heartIcon}/>
                            <Typography variant='caption'>0</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
  }
