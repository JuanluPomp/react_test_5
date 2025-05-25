import type { ProductCart } from "@/context/cart"
import { cartReducer, initialState } from "@/reducer/useReducer"
import type { IProducts } from "@/types"
import { useReducer } from "react"

export function useCartReducer(){
    const [state, dispatch] = useReducer(cartReducer, initialState)
        const addToCart = (product: IProducts) => dispatch(
        {
            type: 'add_to_cart',
            payload: {...product, quantity: 1}
        })
    const increaseFromCart = (product: ProductCart) => dispatch(
        {
            type: 'increase_one',
            payload: product
        }
    )
    const decreaseFromCart = (product: ProductCart) => dispatch(
        {
            type: 'decrease_one',
            payload: product
        }
    )
    const clearCart = (product: ProductCart) => dispatch({
        type: 'clear_cart',
        payload: product
    })
    const removeFromCart = (product: ProductCart) => dispatch(
        {
            type: 'remove_from_cart',
            payload: product
        }
    )

    return {
        addToCart,
        removeFromCart,
        increaseFromCart,
        decreaseFromCart,
        clearCart,
        state
    }
}