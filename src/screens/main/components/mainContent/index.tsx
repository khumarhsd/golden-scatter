import React from "react"
import styles from "./styles.module.scss"
import Products from "../products"
import MainSidebar from "./mainSidebar"

const MainContent = () => {
  
  return (
    <main className={styles.main_wrapper}>
      <aside className={styles.aside_wrapper}>
        <MainSidebar />
      </aside>
        <Products />
    </main>
  )
}

export default MainContent
