import { Box, Typography, Avatar } from '@mui/material' 
import styles from './Testimonials.module.css'
import { nextImageDirectory, imagesDirectory } from "@/constants";
import { StarFilled, StarOutline } from '../Icons';
import Image from 'next/image'

export default function Testimonials () {
    const images = [
        `${nextImageDirectory}sample1.png`,
        `${nextImageDirectory}sample2.png`,
        `${nextImageDirectory}sample3.png`,
        `${nextImageDirectory}sample4.png`,
        `${nextImageDirectory}sample5.png`,
        `${nextImageDirectory}sample6.png`,
        `${nextImageDirectory}sample7.png`,
        `${nextImageDirectory}sample8.png`,
        `${nextImageDirectory}sample9.png`,
    ]
    return (
        <Box className={styles.testimonialsContainer}>
            <Box className={styles.testimonial}>
                <Typography variant='h3' className={styles.title}>
                    What they say about us
                </Typography>
                <Avatar 
                    alt='user' 
                    src={`${imagesDirectory}/avatar.png`} 
                    className={styles.avatar}
                />
                <Box className={styles.starsContainer}>
                    <StarFilled className={styles.icon}/>
                    <StarFilled className={styles.icon}/>
                    <StarFilled className={styles.icon}/>
                    <StarFilled className={styles.icon}/>
                    <StarOutline className={styles.icon}/>
                </Box>
                <Typography variant='h6' color='textSecondary' className={styles.testimonialContent}>
                    Slate helps you see how many more days you need to work to reach your financial goal.
                </Typography>
                <Typography variant='subtitle2' color='#23A6F0'>
                    Regina Miles
                </Typography>
                <Typography variant='h6' >
                    Designer
                </Typography>
            </Box>
            <Box className={styles.imagesContainer}>
                {images.map((value,index) => {
                    return(
                        <Image 
                            key={index} 
                            src={value} 
                            alt={`sample-${index}`}
                            width={112}
                            height={112}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}