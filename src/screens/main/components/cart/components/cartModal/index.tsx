  import ShopIcon from "@/UI/icons/ShopIcon"
  import styles from "./styles.module.scss"
  import { IoClose } from "react-icons/io5"

  const CartModal = ({ isCartOpen, setIsCartOpen }: { isCartOpen: boolean,
    setIsCartOpen:React.Dispatch<React.SetStateAction<boolean>>
  }) => {
    return (
      <div className={`${isCartOpen ? styles.overlay : ""}`}>
        <div
          className={`${styles.cartModal_wrapper} ${
            isCartOpen ? styles.modal_active : ""
          }`}
        >
          <div className={styles.close_button} onClick={() => setIsCartOpen(false)} >
            <IoClose />
          </div>
          <header>
            <ShopIcon width={20} />
            <p>5 Items</p>
          </header>
        </div>
      </div>
    )
  }

  export default CartModal
