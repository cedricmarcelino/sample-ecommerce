import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}

interface ProductsState {
    products: Product[]
}

const initialState: ProductsState = {
    products: []
}

export const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = [...state.products, ...action.payload]
        },
    }
})

export const { addProducts } = products.actions;
export default products.reducer;