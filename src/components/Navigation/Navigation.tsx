'use client'
import { Box, Typography } from "@mui/material"
import styles from './Navigation.module.css'
import { ChevronDown } from "../Icons";

export default function Navigation () {
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
        </>
    )
}
