import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/productsSlice'
import cartReducer from './features/cartSlice'
import snackbarReducer from './features/snackbarSlice'
import hamburgerMenuReducer from './features/hamburgerMenuSlice'
import wishlistReducer from './features/wishlistSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      productsReducer,
      cartReducer,
      snackbarReducer,
      hamburgerMenuReducer,
      wishlistReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']