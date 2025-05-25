import { CartContext } from "@/context/cart"
import {  useContext, useMemo} from "react"

export function useCart (){
    const {state} = useContext(CartContext)

    const totalItems = useMemo(() => {
        return state.reduce((total, item) => total+= item.quantity ,0)
    }, [state])

    const cartTotal = useMemo(() => {
        return state.reduce((total, item) => total += (item.price * item.quantity), 0)
    }, [state])
    return {
        totalItems,
        cartTotal
    }
}