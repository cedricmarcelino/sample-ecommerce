import { Product } from "@/redux/features/productsSlice";

export const enum LOCAL_STORAGE_KEYS {
    CART = 'cart-sample-ecommerce-site',
    FAVORITES = 'favorites-sample-ecommerce-site',
}

export const enum SNACKBAR_TYPES {
    SUCCESS = 'success',
    INFO = 'info'
}

export interface CartContent extends Product {
    count: number
}
export interface CartContents{
    cartContents: CartContent[]
}

export interface FavoriteContents{
    favoriteContents: Product[]
}