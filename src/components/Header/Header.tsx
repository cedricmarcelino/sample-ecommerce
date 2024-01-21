'use client'
import { Box, Typography } from "@mui/material"
import styles from './Header.module.css'
import { Envelope, Phone, Youtube, Facebook, Twitter, Instagram} from "../Icons"
import Navigation from "../Navigation/Navigation"
import React from "react"
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { toggleCart } from "@/redux/features/cartSlice";
import { toggleMenu } from "@/redux/features/hamburgerMenuSlice"
import Actions from "../Actions/Actions"
import { toggleWishlist } from "@/redux/features/wishlistSlice"

export default function Header() {
    const isHamburgermenuOpen: boolean = useAppSelector((state) => state.hamburgerMenuReducer.hamburgerMenu.isOpen)
    const router = useRouter()
    const dispatch = useAppDispatch();

    const handleBrandClick = () => {
        router.push('/');
        dispatch(toggleCart(false))
        dispatch(toggleMenu(false))
        dispatch(toggleWishlist(false))
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
                    {!isHamburgermenuOpen && <Navigation/>}
                    <Actions/>
                </Box>
            </Box>
        </Box>
    )
  }
