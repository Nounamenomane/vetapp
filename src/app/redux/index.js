import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const reducers = combineReducers({

})

export const store = configureStore({
    reducer: reducers
})