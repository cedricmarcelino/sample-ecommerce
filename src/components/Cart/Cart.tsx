import { Box, Typography, Button, Divider } from "@mui/material";
import styles from './Cart.module.css'
import { CartContent } from "@/types/types";
import Image from 'next/image';
import { Minus, Plus } from "../Icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCart, toggleCart } from "@/redux/features/cartSlice";
import router from "next/router";
var _ = require('lodash');

export default function Cart() {
    const dispatch = useAppDispatch();
    const cart: CartContent[] = useAppSelector((state) => state.cartReducer.cart.cartContents)
    const getTotal = () => {
        let totalPrice = 0;
        cart.forEach(({price, discountPercentage, count}) => {
            totalPrice = totalPrice + (_.round(price*(1-(discountPercentage/100)),2)*count)
        })
        return _.round(totalPrice,2)
    }
    const handleNavigate = (id: string | number) => {
        router.push(`/product/${id}`);
        dispatch(toggleCart(false))
    };

    const incrementCount = (cartContentId: number) => {
        const tempCart: CartContent[] = _.cloneDeep(cart);
        const cartContentToEditIndex = tempCart.findIndex((cartContent) => cartContent.id === cartContentId)
        tempCart[cartContentToEditIndex].count++
        dispatch(setCart({ cartContents: tempCart }))
    }

    const decrementCount = (cartContentId: number) => {
        const tempCart: CartContent[] = _.cloneDeep(cart);
        const cartContentToEditIndex = tempCart.findIndex((cartContent) => cartContent.id === cartContentId)
        tempCart[cartContentToEditIndex].count--
        dispatch(setCart({ cartContents: tempCart }))
    }

    const handleDelete = (cartContentId: number) => {
        const tempCart: CartContent[] = _.cloneDeep(cart);
        const cartContentToEditIndex = tempCart.findIndex((cartContent) => cartContent.id === cartContentId)
        tempCart.splice(cartContentToEditIndex, 1)
        dispatch(setCart({ cartContents: tempCart }))
    }

    return (
        <Box className={styles.cartContainer}>
            <Typography variant='h3' className={styles.cartLabel}>Shopping Cart</Typography>
            {(cart && cart.length > 0)
            ?
                <Box className={styles.cartContentsContainer}>
                    {cart.map((cartContent, index) =>{
                        return (
                            <Box key={index}>
                                <Box className={styles.productContainer}>
                                    <Image 
                                            src={cartContent.thumbnail} 
                                            alt={`product-thumbnail-${index}`}
                                            width={150}
                                            height={150}
                                            className={styles.productImage}
                                            onClick={() => {
                                                handleNavigate(cartContent.id)
                                            }}
                                    />
                                    <Box className={styles.productContentContainer}>
                                        <Typography variant='h4' color='#8D8D8D'>{_.startCase(cartContent.title)}</Typography>
                                        <Typography variant='h3'>
                                            {`$${_.round(cartContent.price*(1-(cartContent.discountPercentage/100)),2)}`}
                                        </Typography>
                                        <Box className={styles.counterContainer}>
                                            <Button variant='contained'className={styles.iconButton} onClick={() => {decrementCount(cartContent.id)}} disabled={cartContent.count <= 1}>
                                                <Minus width={15}/>
                                            </Button>
                                            <Typography variant='h6'>{cartContent.count}</Typography>
                                            <Button variant='contained'className={styles.iconButton} onClick={() => {incrementCount(cartContent.id)}} disabled={cartContent.count >= cartContent.stock}>
                                                <Plus width={20}/>
                                            </Button>
                                        </Box>
                                        <Button variant="outlined" color="error" onClick={() => {handleDelete(cartContent.id)}}>
                                            Remove
                                        </Button>
                                    </Box>
                                </Box>
                                <Divider />
                            </Box>
                        )
                    })}
                    <Box className={styles.totalContainer}>
                        <Typography variant='h3'>
                            {`Total Price: `}
                        </Typography>
                        <Typography variant='h3'>
                            ${getTotal()}
                        </Typography>
                    </Box>
                </Box>
            :
                <Box className={styles.noProductsContainer}>
                    <Typography variant='h6' textAlign='center'>
                        You have no products on your cart.
                    </Typography>
                </Box>
            }
        </Box>
    )
}