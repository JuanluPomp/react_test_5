import { SearchSlash } from "lucide-react"
import { useContext, useRef, useState } from "react"
import { caregories } from "../services/categories"
import { FiltersContext } from "../context/filters"


export default function SearchForm() {
    const [filterActive, seFilterActive] = useState(false)
    const [showwPrice, setShowPrice] = useState('0')

    const {setFilters} = useContext(FiltersContext)
    const formRef = useRef<HTMLFormElement>(null)

    const handleOnSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        seFilterActive(true)
        const {category, minPrice} =  Object.fromEntries(new FormData(e.currentTarget)) as {category: string, minPrice: string}
        const filters = {
            category: category || '',
            minPrice: +minPrice || 0
        }
        console.log(filters)
        setFilters(filters)
    }

    const handleCleanFilters= () => {
        formRef.current?.reset()
        setFilters(null)
        seFilterActive(false)
    }
  return (
    <form
        ref={formRef}
        onSubmit={handleOnSubmit} 
        className=" flex justify-start items-center space-x-2 my-4 mb-5">
          <label className=" font-semibold mt-5">Ingrese filtros de busqueda</label>
          <div className=" flex flex-col space-y-1">
            <label>Categoria</label>
            <select name="category" className=" border border-gray-300 p-1 rounded-md">
                {caregories.map((cat) => (
                    <option className=" " 
                    value={cat}>{cat}</option>
                ))}
            </select>
          </div>
          <div className=" flex flex-col space-y-1">
            <label>Precio minimo: <span>${showwPrice}</span></label>
            <input 
            name="minPrice"
            className=" "
            type="range"
            min='0'
            max='1000'
            onChange={(e) => setShowPrice(e.target.value)}/>
          </div>
          
          <button 
            className="border border-gray-300 p-1 rounded-md bg-blue-600 hover:bg-blue-700 cursor-pointer text-white w-30 mt-7 mx-2"
            type="submit"
          >Buscar</button>
          {filterActive && 
            <SearchSlash 
            type="button"
            onClick={handleCleanFilters}
            className=" cursor-pointer font-bold mt-7"/>
          }
    </form>
  )
}
