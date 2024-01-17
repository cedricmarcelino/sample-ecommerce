'use client'
import { Box, Typography, Button } from "@mui/material";
import styles from './Products.module.css'
import { Product, addProducts } from "@/redux/features/productsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useAppSelector } from "@/redux/hooks";
import { use } from "react";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"

var _ = require('lodash');

async function getProducts() {
    const products = await fetch('https://dummyjson.com/products').then((response) => {
        const data = response.json();
        return data
    }).then(({ products }) => {
        return products
    }).catch((error) => {
        console.log(error)
    }
    )
    return products;
}

export default function Products () {
    const dispatch = useAppDispatch();
    const products: Product[] = use(getProducts())
    if(products){
        for(let index=0; index<=4; index++){
            dispatch(addProducts([products[index]]))
        }
    }
    const sampleProducts = useAppSelector((state) => state.productsReducer.products)
    return (
        <Box className={styles.productsContainer}>
            <Box className={styles.labelContainer}>
                <Typography variant='h3'>
                    BESTSELLER PRODUCTS
                </Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                    Problems trying to resolve the conflict between
                </Typography>
            </Box>
            <Box className={styles.productsListContainer}>
                {products ?
                sampleProducts.map((product,index) => {
                    return (
                        <Card key={index} className={styles.card}>
                            <CardMedia
                                component='img'
                                image={product.images[0]}
                                title="green iguana"
                                className={styles.cardMedia}
                            />
                            <CardContent className={styles.cardContent}>
                                <Typography variant='h5'>
                                    {product.title}
                                </Typography>
                                <Typography variant='subtitle2' color='textSecondary'>
                                    {_.startCase(product.category)}
                                </Typography>
                                <Box className={styles.priceContainer}>
                                    <Typography variant='h5' color='#BDBDBD' className={styles.originalPrice}>
                                        {`$${product.price}`}
                                    </Typography>
                                    <Typography variant='h5' color='#23856D'>
                                        {`$${_.round(product.price*(1-(product.discountPercentage/100)),2)}`}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    )
                }):
                <Typography>We are unable to load our products, please try again later.</Typography>
                }
            </Box>
            {products && (
                <Button className={styles.loadButton} variant='outlined' onClick={() => {console.log('Function here')}}>
                    <Typography color='#23A6F0' variant='button'>
                        LOAD MORE PRODUCTS
                    </Typography>
                </Button>
            )}
        </Box>
    )
}