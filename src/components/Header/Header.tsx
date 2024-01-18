'use client'
import { Box, Typography } from "@mui/material"
import styles from './Header.module.css'
import { SearchIcon, CartIcon, HamburgerIcon, Close } from "../Icons"
import { useState } from "react"
import Navigation from "../Navigation/Navigation"
import React from "react"

export default function Header() {
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        setIsVisible(!isVisible)
    }
    return (
        <>
        <Box className={styles.headerRoot}>
            <Box className={styles.brandNameContainer}>
                <Typography variant='h3'>Bandage</Typography>
            </Box>
            <Box className={styles.iconContainer}>
                <SearchIcon className={styles.svgIcon}/>
                <CartIcon className={styles.svgIcon}/>
                {isVisible 
                ? 
                <Close className={styles.svgIcon} onClick={handleClick}/>
                :
                <HamburgerIcon className={styles.svgIcon} onClick={handleClick}/>}
            </Box>
        </Box>
        <Navigation setIsVisible={setIsVisible} isVisible={isVisible}/>
        </>
    )
  }
