import ProductDetailsPage from '@/screens/main/components/productDetails'
import React from 'react'

const getProductDetail=async(slug:string)=>{
  try {
    const res=await fetch(`https://fakestoreapi.com/products/${slug}`)
    const data=await res.json()
    return data
  } catch (error) {
    console.log(error,'error')
  }

}

const ProductDetails =async ({params}:any) => {
  console.log(params,'params')
  const data=await getProductDetail(params.product[1])
  return (
    <ProductDetailsPage />
  )
}

export default ProductDetails