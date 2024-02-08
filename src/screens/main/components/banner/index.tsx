import React from "react"
import styles from "./styles.module.scss"
import { lato } from "@/styles/fonts"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import item1 from "../../../../../public/assets/slide1.png"
import item2 from "../../../../../public/assets/slide2.png"
import item3 from "../../../../../public/assets/slide3.png"
import { IoIosSearch } from "react-icons/io"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      <div className={styles.banner_wrapper}>
        <div className={styles.banner_content_sm}>
          <p>Groceries Delivered in 90 Minute</p>
          <button>
            <span></span>Grocery
          </button>
        </div>
        <div className={styles.banner_content_lg}>
          <h2>Groceries Delivered in 90 Minute</h2>
          <p>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
        </div>
        <div className={styles.banner_search}>
          <IoIosSearch />
          <span className={styles.banner_search_icon}>grocery</span>
          <input type="text" placeholder="Search your products here" />
          <div className={styles.banner_search_button}>
            <IoIosSearch />
            <button> Search</button>
          </div>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        partialVisible
        infinite
        itemClass={styles.carousel_item}
        containerClass={styles.carousel_container}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className={styles.carousel_item}>
            <Image src={item.image} alt="banner" />
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default Banner


const carouselItems = [
  {
    id: 1,
    image: item1,
  },
  {
    id: 2,
    image: item2,
  },
  {
    id: 3,
    image: item3,
  },
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
