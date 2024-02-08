import React, { useContext } from "react"
import Product from "./product"
import styles from "./styles.module.scss"
import { MainPageContext } from "../.."

const Products = () => {
  const { productsRes } = useContext(MainPageContext)

  return (
    <div className={styles.products_wrapper}>
      {productsRes?.products?.map((product) => {
        return <Product product={product} />
      })}
    </div>
  )
}

export default Products
