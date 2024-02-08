import React, { FC } from "react"
import PlusIcon from "../../icons/PlusIcon"
import MinusIcon from "../../icons/MinusIcon"
import styles from "./styles.module.scss"

type CustomButtonProps = {
  amount: number
  type?: "primary" | "secondary"
}


const CustomButton: FC<CustomButtonProps> = ({amount,color}) => {
  return (
    <div className={styles.custom_button}>
      <button>
        <PlusIcon />
      </button>
      <span>{amount}</span>
      <button>
        <MinusIcon />
      </button>
    </div>
  )
}

export default CustomButton
