import React from "react"
import { IoClose } from "react-icons/io5"
import styles from "./styles.module.scss"

const NavSidebar = ({
  isOpen,
  setIsOpen,
  navListRef,
}: {
  isOpen: boolean
  setIsOpen: (value: boolean) => any
  navListRef: any
}) => {
  return (
    <div
      ref={navListRef}
      className={`${styles.nav_list_wrapper} ${
        isOpen ? styles.nav_list_active : ""
      }`}
    >
      <div className={styles.nav_list_close} onClick={() => setIsOpen(false)}>
        <IoClose />
      </div>
      <div className={styles.nav_login}>
        <button>Join In</button>
      </div>
      <ul className={styles.nav_list}>
        <li>Home</li>
        <li>Profile</li>
        <li>Checkout</li>
        <li>Checkout Alternative</li>
        <li>Your Order</li>
        <li>Order Invoice</li>
        <li>Terms and Services</li>
        <li>Privacy Policy</li>
        <li>Need Help</li>
        <li>Offer</li>
      </ul>
    </div>
  )
}

export default NavSidebar
