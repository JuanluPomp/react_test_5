
import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem";
import { BrushCleaning } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/context/cart";



export default function Cart() {
    const {state, clearCart} = useContext(CartContext)
    const {cartTotal, totalItems} = useCart()
    return (
        <div className=" flex flex-col justify-center  rounded-md space-y-4 w-full p-2 ">
            <h1 className=" text-3xl text-center ">Carrito de compras</h1>
            {state.length > 0 &&
                <div className=" flex justify-end">
                    <button
                        onClick={() => clearCart(state[0])}
                        className=" text-center flex justify-between items-center border border-gray-300 rounded-md p-1 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 mr-6 font-bold"
                    ><BrushCleaning />Limpiar Carrito</button>
                </div>
            }
            {
                state.length === 0
                    ? <p>Todavia no hay objetos en el carrito</p>
                    :
                    <>
                        <div className=" flex-1 max-h-[65vh] overflow-y-auto">
                            <ul className=" flex flex-col justify-end items-center  p-2 rounded-md  ">
                            {state.map(item => (
                                <CartItem
                                    key={item.id}
                                    product={item}
                                />
                            ))}
                        </ul>
                        </div>
                        
                        
                        <div className=" flex-shrink-0 border-t border-gray-400 pt-4">
                            <div className=" flex flex-col items-center  space-y-1  font-semibold ">
                            <p >Total de productos: <span className=" font-normal">{ totalItems}</span></p>
                            <p>Total a pagar = <span className=" font-normal">${cartTotal}</span></p>
                        </div>
                        <div className=" flex justify-center">
                            <button
                                className="text-center border border-gray-300 rounded-md p-1 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 mr-6 w-full py-2 font-bold"
                            >Terminar Compra</button>
                        </div>
                        </div>
                    </>
            }
        </div>

    )
}
