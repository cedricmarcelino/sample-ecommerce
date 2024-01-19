import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material"
import styles from './Footer.module.css'
import { Facebook, Twitter, Instagram } from "../Icons"

export default function Footer() {
    const actionCategory = [
        {
            label: 'Company Info',
            links: [
                'About Us',
                'Carrier',
                'We are hiring',
                'Blog',
            ],
        },
        {
            label: 'Legal',
            links: [
                'About Us',
                'Carrier',
                'We are hiring',
                'Blog',
            ],
        },
        {
            label: 'Features',
            links: [
                'Business Marketing',
                'User Analytic',
                'Live Chat',
                'Unlimited Support',
            ],
        },
        {
            label: 'Resources',
            links: [
                'iOS & Android',
                'Watch a Demo',
                'Customers',
                'API',
            ],
        },
    ]
    return (
        <Box >
            <Box className={styles.brandContainer}>
                <Typography variant='h3' className={styles.brandName}>
                    Bandage
                </Typography>
                <Box className={styles.socialIcons}>
                    <Facebook className={styles.icon}/>
                    <Instagram className={styles.icon}/>
                    <Twitter className={styles.icon}/>
                </Box>
            </Box>
            
            <Box className={styles.contactContainerWrapper}>
                <Box className={styles.categoriesContainer}>
                    {actionCategory.map((category, index) => {
                        return (
                            <Box key={index} className={styles.categoryContainer}>
                                <Typography variant='h5' className={styles.categoryLabel}>
                                    {category.label}
                                </Typography>
                                {category.links.map((link,index) => {
                                    return (
                                        <Typography key={index} variant='subtitle2' color='textSecondary' className={styles.link}>{link}</Typography>
                                    )
                                })}
                            </Box>
                        )
                    })}
                </Box>
                <Box className={styles.contactContainer}>
                    <Typography variant='h5'>
                        Get In Touch
                    </Typography>
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <Button className={styles.subscribeButton} variant='contained'>
                                    <Typography className={styles.buttonText}>
                                        Subscribe
                                    </Typography>
                                </Button>
                            </InputAdornment>,
                        }}
                        className={styles.emailField}
                    />
                    <Typography color='textSecondary' className={styles.textFieldLabel}>
                        Lore imp sum dolor Amit
                    </Typography>
                </Box>
            </Box>
            
            <Box className={styles.licenseContainer}>
                <Box className={styles.licenseContentWrapper}>
                    <Typography variant='h6' color='textSecondary' className={styles.licenseContent}>
                        Made With Love By Cedric Jastine Marcelino All Right Reserved 
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}