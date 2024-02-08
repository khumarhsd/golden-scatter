'use client'

import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slices/productSlice"

const rootReducer = {
    product: productReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export default store