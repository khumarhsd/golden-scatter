import { CategoryType } from "./CategoryType"
import { UserType } from "./UserType"

export type ProductType = {
    id: number
    title: string
    category:CategoryType
    owner: UserType
    description: string
    price: string
    discount_price: string
    amount_by_unit: number
    unit: string
    main_image: string
    created_at: string
}