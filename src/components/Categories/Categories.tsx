import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import styles from './Categories.module.css'
import { imagesDirectory } from "@/constants";

export default function Categories(){
    const cardContents = [
        {
            items: 12,
            label: 'PLATES',
            image: `${imagesDirectory}plates.png`,
        },
        {
            items: 4,
            label: 'POTS',
            image: `${imagesDirectory}pots.png`,
        },
        {
            items: 16,
            label: 'LIGHTS',
            image: `${imagesDirectory}lights.png`,
        },
        {
            items: 10,
            label: 'VASES',
            image: `${imagesDirectory}vases.png`,
        },
    ]
    return (
        <Box className={styles.categoriesContainer}>
            {cardContents.map((content, index) => {
                return (
                    <Card key={index} className={styles.card} sx={{backgroundImage: `url(${content.image})`}}>
                        <CardContent className={styles.cardContent}>
                            <Typography variant='h6' className={styles.item}>
                                {content.items} items
                            </Typography>
                            <Typography variant='h3'>
                                {content.label}
                            </Typography>
                            <Typography variant='h6'>
                                Read More
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </Box>
    )
}