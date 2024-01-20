'use client'
import { Product as IProduct} from "@/redux/features/productsSlice"
import { Box, Typography, Rating, Divider, Button } from "@mui/material"
import styles from './Product.module.css'
import { Chevron, Heart, CartIcon, Eye } from "../Icons"
import Sponsors from "../Sponsors/Sponsors"
import Image from 'next/image'
import { useEffect, useState } from "react"
import Products from "../Products/Products"
import { usePathname } from "next/navigation"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { CartContent, SNACKBAR_TYPES } from "@/types/types"
import { setCart } from "@/redux/features/cartSlice"
import { openSnackbar } from "@/redux/features/snackbarSlice"
import { setWishlist } from "@/redux/features/wishlistSlice"
var _ = require('lodash');


interface Props {
    product: IProduct | undefined
}

export const Product: React.FC<Props> = ({ product }) => {
    const dispatch = useAppDispatch();
    const cart: CartContent[] = useAppSelector((state) => state.cartReducer.cart.cartContents)
    const wishlist: IProduct[] = useAppSelector((state) => state.wishlistReducer.wishlist.wishlistContents)
    const colors = [
        '#23A6F0',
        '#2DC071',
        '#E77C40',
        '#252B42',
    ]
    const productImages: string[] = []
    const [imageIndex, setImageIndex] = useState(0)
    const pathname = usePathname()
    product?.images.map((value) => productImages.push(value))

    useEffect(() => {
        setImageIndex(0)
    }, [pathname])

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

    const isItemAddedToCart = (list: CartContent[] | IProduct[]) => {
        if(list.findIndex((item) => item.id === product?.id) < 0) {
            return false
        }
        return true
    }

    const handleCart = () => {
        const tempCart: CartContent[] = _.cloneDeep(cart);
        if(!isItemAddedToCart(cart)){
            const tempProduct: CartContent = _.cloneDeep(product)
            tempProduct.count = 1;
            tempCart.push(tempProduct);
            dispatch(setCart({ cartContents: tempCart }))
            dispatch(openSnackbar(
                {
                    isOpen: true,
                    message: 'Product was added to your cart.',
                    type: SNACKBAR_TYPES.SUCCESS,
                }
            ))
        } else {
            dispatch(openSnackbar(
                {
                    isOpen: true,
                    message: 'This product is already in your cart.',
                    type: SNACKBAR_TYPES.INFO,
                }
            ))
        }
    }

    const handleWishlist = () => {
        const tempWishlist: IProduct[] = _.cloneDeep(wishlist);
        if(!isItemAddedToCart(wishlist)){
            const tempProduct: CartContent = _.cloneDeep(product)
            tempWishlist.push(tempProduct);
            dispatch(setWishlist({ wishlistContents: tempWishlist }))
            dispatch(openSnackbar(
                {
                    isOpen: true,
                    message: 'Product was added to your wishlist.',
                    type: SNACKBAR_TYPES.SUCCESS,
                }
            ))
        } else {
            dispatch(openSnackbar(
                {
                    isOpen: true,
                    message: 'This product is already in your wishlist.',
                    type: SNACKBAR_TYPES.INFO,
                }
            ))
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
                                {productImages[imageIndex] && 
                                    <Image 
                                        src={productImages[imageIndex]} 
                                        alt={`product-thumbnail-${imageIndex}`}
                                        width={348}
                                        height={277}
                                        className={styles.mainImage}
                                    />
                                }
                                {productImages.length > 1 &&
                                <>
                                    <Chevron id={styles['left-chevron-image-navigation']} onClick={handleLeftClick}/>
                                    <Chevron id={styles['right-chevron-image-navigation']} onClick={handleRightClick}/>
                                </>
                                }
                            </Box>
                            {productImages.length > 1 && 
                                <>
                                    <Image 
                                        src={productImages[(imageIndex+1 != 3 ? imageIndex+1 : 0)]} 
                                        alt={`product-thumbnail-${imageIndex}`}
                                        width={100}
                                        height={75}
                                        className={styles.subImage}
                                    />
                                    <Image 
                                        src={productImages[(imageIndex+2 < 3 ? imageIndex+2 : imageIndex+2-3)]} 
                                        alt={`product-thumbnail-${imageIndex}`}
                                        width={100}
                                        height={75}
                                        className={styles.subImage}
                                    />
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
                                <Button variant='contained' className={styles.iconButton} onClick={handleWishlist} disabled={isItemAddedToCart(wishlist)}>
                                    <Heart width={20}/>
                                </Button>
                                <Button variant='contained' className={styles.iconButton} onClick={handleCart} disabled={isItemAddedToCart(cart)}>
                                    <CartIcon width={20}/>
                                </Button>
                                <Button variant='contained' className={styles.iconButton}>
                                    <Eye width={20}/>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.productDetailsContainer}>
                    <Box className={styles.productDetailsActionBar}>
                        <Typography color='textSecondary'>Description</Typography>
                        <Typography color='textSecondary'>Additional Information</Typography>
                        <Box className={styles.reviewsContainer}>
                            <Typography color='textSecondary'>Reviews</Typography>
                            <Typography color='#23856D'>(0)</Typography>
                        </Box>
                    </Box>
                    <Divider/>
                    <Box className={styles.productDetails}>
                        <Box className={styles.productDetailsContent}>
                            <Typography variant='h3'>
                                the quick fox jumps over 
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. 
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. 
                            </Typography>
                        </Box>
                        <Box className={styles.productDetailsImage}>
                            <Image 
                                src={productImages[0]} 
                                alt={`product-thumbnail-0`}
                                width={413}
                                height={372}
                                className={styles.productDetailsImage}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={styles.productsWrapper}>
                    <Products/>
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