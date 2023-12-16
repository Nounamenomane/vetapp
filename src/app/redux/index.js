import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import mainSlice from "./mainSlice";
// connect redux toolkit
const reducers = combineReducers({
    main: mainSlice
})

export const store = configureStore({
    reducer: reducers
})