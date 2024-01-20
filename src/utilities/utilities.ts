import { CartContents, FavoriteContents, LOCAL_STORAGE_KEYS } from "@/types/types";

export const getLocalStorage = (key: LOCAL_STORAGE_KEYS, getItemCount = false): string | number => {
    if(localStorage.getItem(key)){
        if(getItemCount) {
            const data: CartContents | FavoriteContents = JSON.parse(localStorage.getItem(key) as string)
            if( key == LOCAL_STORAGE_KEYS.CART) return (data as CartContents).cartContents.length
            if( key == LOCAL_STORAGE_KEYS.FAVORITES) return (data as FavoriteContents).favoriteContents.length
        }
        return localStorage.getItem(key) as string;
    } else {
        initLocalStorage(key);
        return getLocalStorage(key);
    }
}

export const initLocalStorage = (key: LOCAL_STORAGE_KEYS): void => {
    const cartContents: CartContents = {
        cartContents: []
    }
    const favoritesContents: FavoriteContents = {
        favoriteContents: []
    }
    if(key == LOCAL_STORAGE_KEYS.CART) {
        localStorage.setItem(key, JSON.stringify(cartContents));
    }
    if(key == LOCAL_STORAGE_KEYS.FAVORITES) {
        localStorage.setItem(key, JSON.stringify(favoritesContents));
    }
}

export const setLocalStorage = (key: LOCAL_STORAGE_KEYS, data: CartContents | FavoriteContents): void => {
    const parsedData = JSON.stringify(data)
    localStorage.setItem(key, parsedData);
}