import type {IProducts} from '../types/index'

export default function Products({products}: {products: IProducts[]}) {
  return (
    <div className=" ">
        <ul className=" bg-white border border-gray-300 shadow shadow-sky-500 rounded-sm p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {products.map(product => (
                <li className=" flex flex-col items-center space-y-1 border-2 p-2 bg-slate-100">
                    <h1>{product.title}</h1>
                    <p>{product.slug}</p>
                    <div className=' w-50 h-50 relative'>
                        <img 
                        className=' absolute'
                        src={product.images[0]} alt="product image" />
                    </div>
                    <div className=" flex flex-col items-center">
                        <p>{product.slug}</p>
                        <p><span className=' font-semibold'>Price: </span>{product.price}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
