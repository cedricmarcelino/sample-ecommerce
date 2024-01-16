import { Box, Typography } from "@mui/material"
import styles from './Header.module.css'
import { SearchIcon, CartIcon, HamburgerIcon } from "../Icons"

export default function Header() {
    return (
        <Box className={styles.headerRoot}>
            <Box className={styles.brandNameContainer}>
                <Typography variant='h3' color='textPrimary'>Bandage</Typography>
            </Box>
            <Box className={styles.iconContainer}>
                <SearchIcon className={styles.svgIcon}></SearchIcon>
                <CartIcon className={styles.svgIcon}></CartIcon>
                <HamburgerIcon className={styles.svgIcon}></HamburgerIcon>
            </Box>
        </Box>
    )
  }
