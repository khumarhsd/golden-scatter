import CustomButton from '@/UI/components/button/CustomButton'
import styles from './styles.module.scss'

const CartItem = () => {
  return (
    <div className={styles.cart_item_wrapper}>
      <CustomButton amount={1} />
    </div>
  )
}

export default CartItem