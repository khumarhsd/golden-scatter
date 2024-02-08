import React, { useState } from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import Link from "next/link"
import CustomButton from "@/UI/components/button/CustomButton"
import { ProductType } from "@/types/ProductType"

type ProductProps = {
  product: ProductType
}

const Product = ({ product }: ProductProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <Link href={"/product"} className={styles.product_wrapper}>
      <div className={styles.product_image}>
        {imageLoading && <div>skeleton</div>}
        
        <Image
          onLoad={() => setImageError(false)}
          onError={() => setImageError(true)}
          width={100}
          height={100}
          src={product??}
          alt={product?.title}
        />
      </div>
      <div className={styles.product_info}>
        <h3>{product?.title}</h3>
        <span>{product?.amount_by_unit} </span>
        <div className={styles.product_footer}>
          <span>${product?.price}</span>
          <div className={styles.product_button}>
            <CustomButton amount={3} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
