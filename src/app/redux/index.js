import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// connect redux toolkit
const reducers = combineReducers({

})

export const store = configureStore({
    reducer: reducers
})