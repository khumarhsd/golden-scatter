import React from "react"
import styles from "./styles.module.scss"
import ShopIcon from "@/UI/icons/ShopIcon"

const CartButton = ({isCartOpen,setIsCartOpen}:{
  isCartOpen:boolean,
  setIsCartOpen:React.Dispatch<React.SetStateAction<boolean>>
}) => {

  return (
    <div className={styles.cart_button_wrapper} onClick={() => setIsCartOpen(!isCartOpen)}>
      <div className={styles.cart_button_items}>
        <span>
          <ShopIcon width={16} />
        </span>
        <p>2 Items</p>
      </div>
      <div className={styles.cart_button_total}>$5.00</div>
    </div>
  )
}

export default CartButton
