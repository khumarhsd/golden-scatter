export const APIS = {
  PRODUCTS: "/products",
  LOGIN: "/accounts/api/login/",
  ME:"/accounts/api/user-profile/",
  REGISTER: "/register",
}

export const baseUrl=process.env.NEXT_PUBLIC_BASE_URL
export const baseAccountUrl= baseUrl?.split("/api")[0]