'use client'
import { Box, Typography } from "@mui/material"
import styles from './Navigation.module.css'
import ReactDOM from 'react-dom';
import { MutableRefObject, useEffect, useRef } from "react";
import { ChevronDown } from "../Icons";

interface NavigationProps {
    isVisible: boolean;
    setIsVisible: Function;
}

export default function Navigation (props: NavigationProps) {
    const { isVisible, setIsVisible } = props;
    return ( 
        <>
            <Box className={styles.navMenuDesktop}>
                <Typography variant='subtitle2' color='textSecondary'>
                    Home
                </Typography>
                <Box className={styles.shopContainer}>
                    <Typography variant='subtitle2' color='textSecondary'>
                        Shop
                    </Typography>
                    <ChevronDown width={10} height={15}/>
                </Box>
                <Typography variant='subtitle2' color='textSecondary'>
                    About
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                    Blog
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                    Contact
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                    Pages
                </Typography>
            </Box>
            {isVisible &&
            <Box className={styles.navMenu}>
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
            </Box>}
        </>
    )
}
