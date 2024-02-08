import MainPage from "@/screens/main";
import { APIS } from "@/services/constants";
import { serverSide } from "@/services/httpServer";



const getProducts = async() => {
  try {
    const res=await serverSide.get(APIS.PRODUCTS)
    return res.data
  } catch (error) {
    console.log(error,'error')
  }
}

export default async function Home() {
  const productsRes=await getProducts()
  return (
    <MainPage productsRes={productsRes} />
  );
}
