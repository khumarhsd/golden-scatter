"use client"

import { Provider } from "react-redux"
import store from "./store"
import { createContext } from "react"
import { UserType } from "@/types/UserType"

export const LayoutContext = createContext<{user:UserType|null}>({user:null})

export function Providers({ children, user }: any) {
  return (
    <LayoutContext.Provider value={{user}}>
      <Provider store={store}>{children}</Provider>
    </LayoutContext.Provider>
  )
}
