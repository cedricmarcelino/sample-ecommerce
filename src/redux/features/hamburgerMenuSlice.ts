import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface HamburgerMenu {
    isOpen: boolean;
}

interface HamburgerMenuState {
    hamburgerMenu: HamburgerMenu
}

const initialState: HamburgerMenuState = {
    hamburgerMenu: {
        isOpen: false,
    }
}

export const hamburgerMenu = createSlice({
    name: 'hamburgerMenu',
    initialState,
    reducers: {
        toggleMenu: (state, action: PayloadAction<boolean>) => {
            state.hamburgerMenu.isOpen = action.payload
            if(action.payload){
                window.scrollTo(0, 0)
            }
        },
    }
})

export const { toggleMenu } = hamburgerMenu.actions;
export default hamburgerMenu.reducer;