"use client"

import React from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import product from "../../../../../public/assets/product.jpg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CustomButton from "@/UI/components/button/CustomButton"

const ProductDetailsPage = () => {
  return (
    <div className={styles.details_wrapper}>
      <Carousel
        responsive={responsive}
        partialVisible
        infinite
        arrows={false}
        showDots={true}
        containerClass={styles.carousel_container}
        customDot={<CustomDot />}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className={styles.carousel_item}>
            <Image  src={item.image} alt="banner" />
          </div>
        ))}
      </Carousel>
      <div className={styles.details_content}>
        <h1>lime</h1>
        <span>12pc</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
          deserunt perspiciatis voluptas quibusdam, neque iusto excepturi, ipsam
          blanditiis voluptate dolor vitae provident in magnam ex, consequuntur
          iste odio doloremque! Similique fuga aperiam corrupti totam.
        </p>
        <div className={styles.details_category}>
          <ul>
            {categories.map((category) => (
              <li key={category.value}>{category.label}</li>
            ))}
          </ul>
        </div>
        <div className={styles.details_footer}>
              <span>$1.5</span>
              <CustomButton amount={1} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage

const CustomDot = ({ onClick, ...rest }) => {
  const {
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest

  return (
    <button
      className={`${styles.custom_dot} ${
        active ? styles.active : styles.inactive
      }`}
      onClick={() => onClick()}
    >
      <div key={carouselItems[index].id} className={styles.carousel_item}>
        <Image src={carouselItems[index].image} alt="banner" />
      </div>
    </button>
  )
}

const carouselItems = [
  {
    id: 1,
    image: product,
  },
  {
    id: 2,
    image: product,
  },
  {
    id: 3,
    image: product,
  },
  {
    id: 3,
    image: product,
  },
]

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const categories = [
  {
    label: "Fruit & Vegetables",
    value: "fruit_vegetables",
  },
  {
    label: "Vegetables",
    value: "vegetables",
  }
]
