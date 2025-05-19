import { useEffect, useState } from "react"
import type { IProducts } from "./types"
import Products from "./components/Products"



function App() {

  const [products, setProducts] = useState<IProducts[]>([])

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=12`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })
  }, [])
  return (
    <>
      <main className=' container mx-auto'>
        <h1 className=' text-3xl font-bold text-center mt-10'>Shoping Cart</h1>
        <Products
          products={products}
        />
      </main>
    </>
  )
}

export default App
