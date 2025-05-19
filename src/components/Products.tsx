
import {  ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { FiltersContext } from '../context/filters';

export default function Products() {
    const {products} = useContext(FiltersContext)
  return (
        <ul className=" bg-white border grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  border-gray-300 shadow shadow-sky-500 rounded-sm px-6 py-4 ">
            {products.map(product => (
                <li className=" flex flex-col items-center space-y-2  p-2 bg-slate-100 rounded-md shadow shadow-sky-500 pb-2 w-4/5 ">
                    <h1 className=' font-semibold text-center '>{product.title}</h1>
                        <img 
                        className=' w-35 h-35 border border-gray-300'
                        src={product.image} alt="product image" />
                    <div className=" flex justify-between items-center gap-4">
                        <p><span className=' font-semibold'>Rating: </span>{product.rating.rate}</p>
                        <p>{product.category}</p>
                    </div>
                    <p className=' font-semibold'>Price: <span className=' font-normal'>{product.price}</span></p>
                    <button className=' flex justify-center items-center gap-2 bg-blue-600   w-full  text-white px-2 py-1 rounded-md cursor-pointer'>
                        <ShoppingCart />
                        Add to cart
                    </button>
                </li>
            ))}
        </ul>
  )
}
