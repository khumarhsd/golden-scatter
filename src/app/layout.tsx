import type { Metadata } from "next"
import { Poppins, Lato } from "next/font/google"
import "./globals.scss"
import { Providers } from "./GlobalRedux/provider"
import { serverSide } from "@/services/httpServer"
import { APIS, baseAccountUrl, baseUrl } from "@/services/constants"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "700",
})
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}


const fetchUser=async()=>{
  try {
      serverSide.defaults.baseURL=baseAccountUrl
      const res=await serverSide.get(APIS.ME)
      return res.data
   } catch (error) {
      console.log(error,'error')
    }finally{
      serverSide.defaults.baseURL=baseUrl
    }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const user=await fetchUser()

  return (
    <html lang="en">
      <body className={`${lato.className} ${poppins.variable}`}>
        <Providers user={user}>{children}</Providers>
      </body>
    </html>
  )
}
