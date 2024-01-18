import { Box, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material"
import styles from './Posts.module.css'
import { imagesDirectory } from "@/constants";
import { Clock, Chart, Chevron } from "../Icons";

export default function Posts() {
    const posts = [
        {
            thumbnail: `${imagesDirectory}post1.png`,
            title: `Loudest à la Madison #1 (L'integral)`,
            summary: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
            datePosted: '22 April 2021',
            comments: '10',
            tags: ['Google', 'Trending', 'New']
        },
        {
            thumbnail: `${imagesDirectory}post2.png`,
            title: `Loudest à la Madison #1 (L'integral)`,
            summary: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
            datePosted: '22 April 2021',
            comments: '10',
            tags: ['Google', 'Trending', 'New']
        },
        {
            thumbnail: `${imagesDirectory}post3.png`,
            title: `Loudest à la Madison #1 (L'integral)`,
            summary: `We focus on ergonomics and meeting you where you work. It's only a keystroke away.`,
            datePosted: '22 April 2021',
            comments: '10',
            tags: ['Google', 'Trending', 'New']
        }
    ]
    return (
        <Box className={styles.container}>
            <Box className={styles.labelContainer}>
                <Typography variant='h6' color='#23A6F0'>
                    Practice Advice
                </Typography>
                <Typography variant='h2'>
                    Featured Posts
                </Typography>
            </Box>
            <Box className={styles.postsContainer}>
                {posts.map((post, index) => {
                    return(
                    <Card key={index} className={styles.card}>
                        <CardMedia
                            component='img'
                            height='300'
                            width='330'
                            image={post.thumbnail}
                            alt={`post${index}_thumbnail`}
                        />
                        <CardContent className={styles.cardContent}>
                            <Box className={styles.tags}>
                                {post.tags.map((tag, tagIndex) => {
                                    return (
                                        <Typography key={`post${index}-tag${tagIndex}`} variant='caption' className={styles.tag} color={tagIndex == 0 ? '#8EC2F2' : 'textSecondary'}>
                                            {tag}
                                        </Typography>
                                    )
                                })}
                            </Box>
                            <Typography variant='h4' className={styles.postTitle}>
                                {post.title}
                            </Typography>
                            <Typography variant='subtitle1' className={styles.postSummary} color='textSecondary'>
                                {post.summary}
                            </Typography>
                            <Box className={styles.captionsContainer}>
                                <Box className={styles.captionContainer}>
                                    <Clock width='16' className={styles.icon}/>
                                    <Typography variant='caption' color='textSecondary'>
                                        {post.datePosted}
                                    </Typography>
                                </Box>
                                <Box className={styles.captionContainer}>
                                    <Chart width='16' className={styles.icon}/>
                                    <Typography variant='caption' color='textSecondary'>
                                        {post.comments} comments
                                    </Typography>
                                </Box>
                            </Box>
                            <CardActions className={styles.cardActions}>
                                <Typography variant='h6' color='textSecondary'>
                                    Learn More
                                </Typography>
                                <Chevron width='9'/>
                            </CardActions>
                        </CardContent>
                    </Card>
                    )
                })}
            </Box>
        </Box>
    )
  }
