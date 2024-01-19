'use client'
import { Box, Typography } from "@mui/material"
import styles from './Header.module.css'
import { SearchIcon, CartIcon, HamburgerIcon, Close, Envelope, Phone, Youtube, Facebook, Twitter, Instagram, Heart, UserIcon } from "../Icons"
import { useState } from "react"
import Navigation from "../Navigation/Navigation"
import React from "react"
import { useRouter } from "next/navigation";

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()
    const handleBrandClick = () => {
        router.push('/');
    }

    const handleClick = () => {
        setIsVisible(!isVisible)
    }
    return (
        <>
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
                <Navigation setIsVisible={setIsVisible} isVisible={isVisible}/>
                <Box className={styles.iconContainer}>
                    <Box className={styles.loginContainer}>
                        <UserIcon className={styles.userIcon}/>
                        <Typography variant='h6' color='#23A6F0'>
                            Login / Register
                        </Typography>
                    </Box>
                    <SearchIcon className={styles.svgIcon}/>
                    <Box className={styles.cartContainer}>
                        <CartIcon className={styles.cartIcon}/>
                        <Typography variant='caption'>0</Typography>
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
        </>
    )
  }
