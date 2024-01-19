import { Box, Typography, Button } from "@mui/material"
import styles from './Banner.module.css'

export default function Banner() {
    return (
        <Box className={styles.bannerContainer}>
            <Box className={styles.contentContainer}>
                <Typography variant='h6' color='#23A6F0' className={styles.subTitle}>
                    Designing Better Experience
                </Typography>
                <Typography variant='h2' className={styles.title}>
                    Problems trying to resolve the conflict between 
                </Typography>
                <Typography variant='subtitle1' color='textSecondary' className={styles.content}>
                    Problems trying to resolve the conflict between the two major realms of Classical physics: 
                </Typography>
                <Typography variant='h3' color='#23856D' className={styles.price}>
                    $16.48
                </Typography>
                <Button variant='contained' className={styles.button}>
                    <Typography variant='button' color='#FFF'>
                        ADD YOUR CALL TO ACTION
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}