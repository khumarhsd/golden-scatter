"use client"

import { getProducts } from "@/services/httpClient"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await getProducts()
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
  }
)
