import type { ProductCart } from "@/context/cart"

type CartAction =
  | { type: 'clear_cart'; payload?: ProductCart  }
  | { type: 'add_to_cart' | 'remove_from_cart' | 'increase_one' | 'decrease_one'; payload: ProductCart }

export const initialState = JSON.parse(localStorage.getItem('cart') ?? '[]')

export const cartReducer = (state: ProductCart[], action: CartAction) => {
    const {type, payload} = action
    switch(type){
        case 'add_to_cart': {
            const productIndex = state.findIndex(product => product.id === payload?.id)
            if(productIndex >= 0 ){
                const newCart = structuredClone(state)
                newCart[productIndex].quantity += 1
                localStorage.setItem('cart',JSON.stringify(newCart))
                return newCart
            }
            const newCart = [...state, {...payload, quantity: 1}]
            localStorage.setItem('cart',JSON.stringify(newCart))
            return newCart
        }
        case 'remove_from_cart': {
            const newCart = state.filter(product => product.id !== payload?.id)
            state.length === 1 
                ? localStorage.removeItem('cart')
                : localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        }
        case 'increase_one': {
            const newCart = state.map(product => {
                return product.id === payload?.id
                    ? {...product, quantity: product.quantity +=1}
                    : product
            })
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        }
        case 'decrease_one': {
            const currentProduct = state.find(product => product.id === payload?.id)
            if(currentProduct?.quantity === 1){
                const newCart = state.filter(product => product.id !== currentProduct.id)
                state.length === 1 
                    ? localStorage.removeItem('cart')
                    : localStorage.setItem('cart', JSON.stringify(newCart))
                return newCart
            }
            const newCart = state.map(product => {
                return product.id === currentProduct?.id
                    ? {...product, quantity: product.quantity -= 1}
                    : product
            })
            localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        }
        case 'clear_cart': {
            localStorage.removeItem('cart')
            return []
        }
    }
}