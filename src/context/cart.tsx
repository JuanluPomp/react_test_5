import React, { createContext } from "react";
import type { IProducts} from "../types";
import { useCartReducer } from "@/hooks/useCartReducer";

export type ProductCart = IProducts & {
    quantity: number
}

export const CartContext = createContext<{
    addToCart: (product: IProducts) => void,
    increaseFromCart: (product: ProductCart) => void,
    decreaseFromCart: (product: ProductCart) => void,
    clearCart: (product: ProductCart) => void,
    removeFromCart: (product: ProductCart) => void,
    state: ProductCart[]
}>()

export function CartProvider({children}: {children: React.ReactNode}) {
    const {addToCart,removeFromCart, increaseFromCart, decreaseFromCart, clearCart, state} = useCartReducer() 
    return (
        <CartContext.Provider 
            value={{
                addToCart,
                increaseFromCart,
                decreaseFromCart,
                clearCart,
                removeFromCart,
                state
            }}
        >{children}
        </CartContext.Provider>
    )
}

