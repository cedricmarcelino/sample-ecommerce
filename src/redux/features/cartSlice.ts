import { CartContent, CartContents, LOCAL_STORAGE_KEYS } from '@/types/types';
import { getLocalStorage, setLocalStorage } from '@/utilities/utilities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface Cart {
    isOpen: Boolean;
    cartContents: CartContent[]
}

interface CartState {
    cart: Cart
}

const initialState: CartState = {
    cart: {
        isOpen: false,
        cartContents: []
    }
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state, action: PayloadAction<Boolean>) => {
            state.cart.isOpen = action.payload
        },
        setCart: (state, action: PayloadAction<CartContents>) => {
            state.cart.cartContents = action.payload.cartContents
            setLocalStorage(LOCAL_STORAGE_KEYS.CART, { cartContents: action.payload.cartContents })
        }
    }
})

export const { toggleCart, setCart } = cart.actions;
export default cart.reducer;