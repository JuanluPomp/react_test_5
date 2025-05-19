
import React, {createContext, useState} from 'react'
import type { IProducts, ProductFilters } from '../types'

interface IFiltersContext {
    filters: ProductFilters | null,
    setFilters: React.Dispatch<React.SetStateAction<ProductFilters | null> >
    products: IProducts[]
    setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>
}

export const FiltersContext = createContext<IFiltersContext>()

export function FiltersProvider ({children}: {children: React.ReactNode}) {
    const [products, setProducts] = useState<IProducts[]>([])
    const [filters, setFilters] = useState<ProductFilters | null>({
                category: '',
                minPrice: 0
        })
    return (
        <FiltersContext.Provider
            value={{filters, setFilters, products, setProducts}}
        >{children}</FiltersContext.Provider>
    )
}