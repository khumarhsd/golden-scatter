import React, { useState } from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import Link from "next/link"
import CustomButton from "@/UI/components/button/CustomButton"
import { ProductType } from "@/types/ProductType"
import { useRouter } from "next/navigation"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

type ProductProps = {
  product: ProductType
}

const Product = ({ product }: ProductProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const router = useRouter()

  const goProduct = () => {
    router.push(`/product/${product.id}`)
  }
  return (
    <Link
      onClick={goProduct}
      href={"/product"}
      className={styles.product_wrapper}
    >
      <div className={styles.product_image}>
        {imageLoading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              minHeight: "100%",
              minWidth: "100%",
            }}
          >
            <Skeleton
            
              count={1}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        )}
        <Image
          onLoad={() => setImageLoading(false)}
          onError={() => setImageError(true)}
          width={100}
          height={100}
          src={product?.main_image ?? ""}
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
