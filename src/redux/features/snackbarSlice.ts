import { SNACKBAR_TYPES } from '@/types/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface ISnackbar {
    isOpen: boolean | undefined;
    message: string;
    type: SNACKBAR_TYPES;
}

interface ISnackbarState {
    snackbar: ISnackbar
}

const initialState: ISnackbarState = {
    snackbar: {
        isOpen: false,
        message: '',
        type: SNACKBAR_TYPES.SUCCESS,
    }
}

export const snackbar = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        openSnackbar: (state, action: PayloadAction<ISnackbar>) => {
            state.snackbar = {
                isOpen: true,
                message: action.payload.message,
                type: action.payload.type
            }
        },
        closeSnackbar: (state) => {
            state.snackbar = initialState.snackbar
        },
    }
})

export const { openSnackbar, closeSnackbar } = snackbar.actions;
export default snackbar.reducer;