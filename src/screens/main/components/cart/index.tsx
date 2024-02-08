import { useEffect, useState } from "react"
import CartButton from "./components/cartButton"
import CartModal from "./components/cartModal"

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen]);

  return (
    <>
    <CartButton isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <CartModal isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
    </>
  )
}

export default Cart
