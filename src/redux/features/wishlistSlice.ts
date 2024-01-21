import { LOCAL_STORAGE_KEYS, WishlistContents } from '@/types/types';
import { setLocalStorage } from '@/utilities/utilities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Product } from './productsSlice';


export interface Wishlist {
    isOpen: Boolean;
    wishlistContents: Product[]
}

interface WishlistState {
    wishlist: Wishlist
}

const initialState: WishlistState = {
    wishlist: {
        isOpen: false,
        wishlistContents: []
    }
}

export const wishlist = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<Boolean>) => {
            state.wishlist.isOpen = action.payload
            window.scrollTo(0, 0)
        },
        setWishlist: (state, action: PayloadAction<WishlistContents>) => {
            state.wishlist.wishlistContents = action.payload.wishlistContents
            setLocalStorage(LOCAL_STORAGE_KEYS.WISHLIST, { wishlistContents: action.payload.wishlistContents })
        }
    }
})

export const { toggleWishlist, setWishlist } = wishlist.actions;
export default wishlist.reducer;