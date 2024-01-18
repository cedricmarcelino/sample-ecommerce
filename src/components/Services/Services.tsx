import { Box, Typography, Card, CardContent } from "@mui/material"
import styles from './Services.module.css'
import { Book, BookReader, Growth} from "../Icons"

export default function Services() {
    const services = [
        {
            icon: <BookReader className={styles.icon}/>,
            title: 'Easy Wins',
            desc: 'Get your best looking smile now!',
        },
        {
            icon: <Book className={styles.icon}/>,
            title: 'Concrete',
            desc: 'Defalcate is most focused in helping you discover your most beautiful smile',
        },
        {
            icon: <Growth className={styles.icon}/>,
            title: 'Hack Growth',
            desc: 'Overcame any hurdle or any other problem.',
        }
    ]
    return(
        <Box className={styles.servicesContainer}>
            <Box className={styles.servicesLabel}>
                <Typography variant='h4' color='textSecondary'>
                    Featured Products
                </Typography>
                <Typography variant='h3'>
                    THE BEST SERVICES
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                    Problems trying to resolve the conflict between
                </Typography>
            </Box>
            <Box className={styles.cardsContainer}>
                {services.map((service, index) => {
                    return (
                        <Card key={index} className={styles.card}>
                            <CardContent className={styles.cardContent}>
                                {service.icon}
                                <Typography variant='h3' className={styles.cardTitle}>
                                    {service.title}
                                </Typography>
                                <Typography variant='subtitle1' color='textSecondary'>
                                    {service.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Box>
        </Box>
    )
}