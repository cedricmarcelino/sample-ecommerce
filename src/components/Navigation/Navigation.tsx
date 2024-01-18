'use client'
import { Box, Typography } from "@mui/material"
import styles from './Navigation.module.css'
import ReactDOM from 'react-dom';
import { MutableRefObject, useEffect, useRef } from "react";

interface NavigationProps {
    isVisible: boolean;
    setIsVisible: Function;
}

export default function Navigation (props: NavigationProps) {
    const { isVisible, setIsVisible } = props;
    const wrapperRef = useRef(null);
    return ( isVisible &&
        <Box className={styles.navMenu} ref={wrapperRef}>
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
        </Box>
    )
}
