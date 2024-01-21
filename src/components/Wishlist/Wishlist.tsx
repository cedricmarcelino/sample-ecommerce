import { Box, Typography, Button, Divider } from "@mui/material";
import Image from 'next/image';
import styles from './Wishlist.module.css'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Product } from "@/redux/features/productsSlice";
import { setWishlist, toggleWishlist } from "@/redux/features/wishlistSlice";
import router from "next/router";
var _ = require('lodash');

export default function Wishlist() {
    const wishlist: Product[] = useAppSelector((state) => state.wishlistReducer.wishlist.wishlistContents)
    const dispatch = useAppDispatch();
    const handleDelete = (wishlistContentId: number) => {
        const tempWishlist: Product[] = _.cloneDeep(wishlist);
        const cartContentToEditIndex = tempWishlist.findIndex((wishlist) => wishlist.id === wishlistContentId)
        tempWishlist.splice(cartContentToEditIndex, 1)
        dispatch(setWishlist({ wishlistContents: tempWishlist }))
    }
    const handleNavigate = (id: string | number) => {
        router.push(`/product/${id}`);
        dispatch(toggleWishlist(false))
    };
    return (
        <Box className={styles.wishlistContainer}>
            <Typography variant='h3' className={styles.wishlistLabel}>Wishlist</Typography>
            {(wishlist && wishlist.length > 0)
            ?
                <Box className={styles.wishlistContentsContainer}>
                    {wishlist.map((wishlistContent, index) =>{
                        return (
                            <Box key={index}>
                                <Box className={styles.productContainer}>
                                    <Image 
                                        src={wishlistContent.thumbnail} 
                                        alt={`product-thumbnail-${index}`}
                                        width={150}
                                        height={150}
                                        className={styles.productImage}
                                        onClick={() => {
                                            handleNavigate(wishlistContent.id)
                                        }}
                                    />
                                    <Box className={styles.productContentContainer}>
                                        <Typography variant='h4' color='#8D8D8D'>{_.startCase(wishlistContent.title)}</Typography>
                                        <Button variant="outlined" color="error" onClick={() => {handleDelete(wishlistContent.id)}}>
                                            Remove
                                        </Button>
                                    </Box>
                                </Box>
                                <Divider />
                            </Box>
                        )
                    })}
                </Box>
            :
                <Box className={styles.noProductsContainer}>
                    <Typography variant='h6' textAlign='center'>
                        You have no products on your wishlist.
                    </Typography>
                </Box>
            }
        </Box>
    )
}
