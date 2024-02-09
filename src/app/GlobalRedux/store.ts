'use client'

import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slices/productSlice"
import userReducer from "./slices/userSlice"

const rootReducer = {
    product: productReducer,
    user: userReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export default store