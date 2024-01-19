'use client'
import { Product as IProduct} from "@/redux/features/productsSlice"
import { Box, Typography, Rating, Divider, Button } from "@mui/material"
import styles from './Product.module.css'
import { Chevron, Heart, CartIcon, Eye } from "../Icons"
import Sponsors from "../Sponsors/Sponsors"
import Image from 'next/image'
import { useState } from "react"
var _ = require('lodash');


interface Props {
    product: IProduct | undefined
}

export const Product: React.FC<Props> = ({ product }) => {
    const colors = [
        '#23A6F0',
        '#2DC071',
        '#E77C40',
        '#252B42',
    ]
    const productImages: string[] = []
    const [imageIndex, setImageIndex] = useState(0)
    product?.images.map((value) => productImages.push(value))

    const handleRightClick = () => {
        if(imageIndex+1 < 3){
            setImageIndex(imageIndex+1)
        } else {
            setImageIndex(0)
        }
    }

    const handleLeftClick = () => {
        if(imageIndex-1 < 0){
            setImageIndex(2)
        } else {
            setImageIndex(imageIndex-1)
        }
    }

    return (
        <>
            {product
            ?
                <>
                <Box className={styles.productContainer}>
                    <Box className={styles.breadCrumbs}>
                        <Typography variant='h6'>Home</Typography>
                        <Chevron/>
                        <Typography variant='h6' color='textSecondary'>Shop</Typography>
                    </Box>
                    <Box className={styles.product}>
                        <Box className={styles.photosContainer}>
                            <Box className={styles.mainImage}>
                                <Image 
                                    src={productImages[imageIndex]} 
                                    alt={`product-thumbnail-${imageIndex}`}
                                    width={348}
                                    height={277}
                                />
                                {productImages.length > 1 &&
                                <>
                                    <Chevron id={styles['left-chevron-image-navigation']} onClick={handleLeftClick}/>
                                    <Chevron id={styles['right-chevron-image-navigation']} onClick={handleRightClick}/>
                                </>
                                }
                            </Box>
                            {productImages.length > 1 && 
                                <>
                                <Box className={styles.subImage}>
                                    <Image 
                                        src={productImages[(imageIndex+1 != 3 ? imageIndex+1 : 0)]} 
                                        alt={`product-thumbnail-${imageIndex}`}
                                        width={100}
                                        height={75}
                                    />
                                </Box>
                                <Box className={styles.subImage}>
                                    <Image 
                                        src={productImages[(imageIndex+2 < 3 ? imageIndex+2 : imageIndex+2-3)]} 
                                        alt={`product-thumbnail-${imageIndex}`}
                                        width={100}
                                        height={75}
                                    />
                                </Box>
                                </>
                            }
                        </Box>
                        <Box className={styles.productMetadata}>
                            <Typography variant='h4'>{_.startCase(product.title)}</Typography>
                            <Box className={styles.ratingContainer}>
                                <Rating
                                    value={product.rating}
                                    precision={0.2}
                                    readOnly
                                />
                                <Typography variant='h6' color='textSecondary'>10 reviews</Typography>
                            </Box>
                            <Typography variant='h3'>
                                {`$${_.round(product.price*(1-(product.discountPercentage/100)),2)}`}
                            </Typography>
                            <Box className={styles.stockContainer}>
                                <Typography variant='h6' color='textSecondary'>Availability :</Typography>
                                <Typography variant='h6' color={product.stock>0 ? '#23A6F0' : 'red'}>
                                    {product.stock>0 ? ' In Stock' : ' Out Of Stock'}
                                </Typography>
                            </Box>
                            <Typography variant='subtitle1'>
                                {product.description}
                            </Typography>
                            <Divider className={styles.divider} variant='middle'/>
                            <Box className={styles.colorsContainer}>
                                {colors.map((color, index) => {
                                    return (
                                        <Box key={index} className={styles.color} sx={{backgroundColor: `${color}`}}/>
                                    )
                                })}
                            </Box>
                            <Box className={styles.buttonsContainer}>
                                <Button variant='contained' className={styles.selectButton}>
                                    <Typography variant='h6' color='white'>Select Options</Typography>
                                </Button>
                                <Button variant='contained' className={styles.iconButton}>
                                    <Heart width={20}/>
                                </Button>
                                <Button variant='contained'className={styles.iconButton}>
                                    <CartIcon width={20}/>
                                </Button>
                                <Button variant='contained'className={styles.iconButton}>
                                    <Eye width={20}/>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Sponsors/>
                </>
            :
                <Box className={styles.errorFetching}>Failed to fetch product data. Please try again later.</Box>
            }
        </>
    )
}

export default Product;