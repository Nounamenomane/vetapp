import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        clickedMenu : 'События'
    },
    reducers: {
        onMenuClick: (state, action) => {
            state.clickedMenu = action.payload
            console.log(action.payload);
        }
    }
})

export default mainSlice.reducer
export const { onMenuClick } = mainSlice.actions