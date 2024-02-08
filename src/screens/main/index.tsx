"use client"

import { ProductType } from "@/types/ProductType"
import Hero from "./components/banner"
import Cart from "./components/cart"
import MainContent from "./components/mainContent"
import Navbar from "./components/navbar"
import { createContext } from "react"

type MainPageProps = {
  productsRes: {
    products: ProductType[]
    count: number
    previous: number
    next: number
  }
}

export const MainPageContext = createContext({} as MainPageProps)

const MainPage = ({ productsRes }: MainPageProps) => {
  return (
    <MainPageContext.Provider value={{ productsRes }}>
      <Navbar />
      <Hero />
      <MainContent />
      <Cart />
    </MainPageContext.Provider>
  )
}

export default MainPage
