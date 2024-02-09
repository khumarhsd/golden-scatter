"use client"

import React, { useState } from "react"
import styles from "./styles.module.scss"
import logo from "../../../public/assets/logo.svg"
import Image from "next/image"
import { clientSide } from "@/services/httpClient"
import { APIS, baseUrl } from "@/services/constants"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "@/app/GlobalRedux/slices/userSlice"
import {setCookie} from 'cookies-next'


const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  const user = useSelector((state: any) => state.user.user)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true)
      e.preventDefault()

      const formData = new FormData(e.currentTarget)

      const username = formData.get("username") as string
      const password = formData.get("password") as string

      const body = {
        username,
        password,
      }

      clientSide.defaults.baseURL = baseUrl?.split("/api")[0]
      const res = await clientSide.post(APIS.LOGIN, body)
      if (res.status === 200) {
        dispatch(setUser(res?.data))
        setCookie('token',res?.data?.token)
        router.replace("/user")
      }
    } catch (error) {
      alert("Invalid credentials")
    } finally {
      setLoading(false)
      clientSide.defaults.baseURL = baseUrl
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
      <div className={styles.container}>
        <div className={styles.login_wrapper}>
          <Image src={logo} alt={logo} />
          <p>Log in to admin</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Ex: demo@demo.com"
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password">Password</label>
              <div className={styles.password_input}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Ex: demo"
                />
                <span
                  className={styles.password_toggle}
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <svg
                      data-baseweb="icon"
                      viewBox="0 0 20 20"
                      title="Show password text"
                      class="al j2 j3 j4 j5"
                    >
                      <title>Show password text</title>
                      <path d="M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  ) : (
                    <svg
                      data-baseweb="icon"
                      viewBox="0 0 20 20"
                      title="Hide password text"
                      class="al j2 j3 j4 j5"
                    >
                      <title>Hide password text</title>
                      <path d="M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"></path>
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <button disabled={loading} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
  )
}

export default LoginPage
