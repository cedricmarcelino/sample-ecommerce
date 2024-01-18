'use client'
import { Box, Typography, Button } from "@mui/material";
import styles from './Products.module.css'
import { Product, addProducts } from "@/redux/features/productsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
var _ = require('lodash');

export default function Products () {
    const dispatch = useAppDispatch();
    const sampleProducts = useAppSelector((state) => state.productsReducer.products)
    const [limit, setLimit] = useState(4)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}`)
          .then((res) => res.json())
          .then(({ products, total }) => {
            dispatch(addProducts(products))
            setTotal(total)
          })
    }, [limit])
    // const products: Product[] = use(getProducts())
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
                {sampleProducts.length > 0 ?
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
                                    {_.startCase(product.title)}
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
            {(sampleProducts.length > 0 && sampleProducts.length < total)  && (
                <Button className={styles.loadButton} variant='outlined' onClick={() => {setLimit(limit+4); console.log(total)}}>
                    <Typography color='#23A6F0' variant='button'>
                        LOAD MORE PRODUCTS
                    </Typography>
                </Button>
            )}
        </Box>
    )
}