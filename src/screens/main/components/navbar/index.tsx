import styles from "./styles.module.scss"
import logo from "../../../../../public/assets/logo.svg"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import NavSidebar from "./components/sidebar"
import "../../../../../node_modules/flag-icons/css/flag-icons.min.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navListRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (navListRef.current && !navListRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [navListRef])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.nav_group}>
          <div
            className={`${styles.menu} ${isOpen ? styles.menu_open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <Image src={logo} alt="logo" />
          </div>
        </div>

        <div>
          <span className="fi fi-us"></span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}
      <NavSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navListRef={navListRef}
      />
    </>
  )
}

export default Navbar
