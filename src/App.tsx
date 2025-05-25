import { useContext, useEffect} from "react"
import Products from "./components/Products"
import SearchForm from "./components/SearchForm"
import { FiltersContext } from "./context/filters"
import { useProducts } from "./hooks/useProducts"
import { ToastContainer } from "react-toastify"



function App() {
const { filters} = useContext(FiltersContext)
const {getProducts, filterProducts} = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [filters]) 

  
  return (
      <>
      <ToastContainer/>
      <main className=" container mx-auto">
        <SearchForm/>
        <Products/>
      </main>
       
    </>
  )
}

export default App
