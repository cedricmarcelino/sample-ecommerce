import { Aws, Hooli, Lyft, PiedPiperHat, Reddit, Stripe } from "../Icons";
import { Box } from "@mui/material";
import styles from './Sponsors.module.css'

export default function Sponsors() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.sponsorsContainer}>
                <Hooli/>
                <Lyft/>
                <PiedPiperHat/>
                <Stripe/>
                <Aws/>
                <Reddit/>
            </Box>
        </Box>
    )
}