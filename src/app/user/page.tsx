"use client"

import React, { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import { LayoutContext } from "../GlobalRedux/provider"
import { useRouter } from "next/navigation"

const User = () => {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)
  const { user } = useContext(LayoutContext)
  const userData = useSelector((state: any) => state.user.user) || user
  useEffect(() => {
    if (!userData) {
      router.replace("/")
    }else{
      setLoading(false)
    }
  }, [user])

  if(loading) return <div>Loading...</div>

  return <div>User</div>
}

export default User
