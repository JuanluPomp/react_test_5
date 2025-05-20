import { Minus, Plus } from "lucide-react";

export default function CartItem() {
  return (
    <div className=" ">
        <ul className=" border border-gray-300 rounded-md p-2 m-10 w-3/4 space-y-2">
            <li className=" flex justify-between items-center border border-gray-300 bg-slate-100 px-5 shadow-sm shadow-sky-500">
                <div className=" flex items-end">
                    <img 
                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
                    alt="Product Image" 
                    className=" w-15 h-15"
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                
                <div className=" flex items-center space-x-2 text-3xl font-extrabold">
                    <Minus className=" border border-gray-300 p-1 cursor-pointer rounded-full"/>
                    <span className="font-semibold text-xl">11</span>
                    <Plus className="border border-gray-300 p-1 cursor-pointer rounded-full"/>
                </div>
                </li>
        </ul>
    </div>
  )
}
