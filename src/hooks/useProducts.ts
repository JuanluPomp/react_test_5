import { useContext, useRef } from "react";
import { FiltersContext } from "../context/filters";
import type { IProducts } from "../types";

export function useProducts() {
  const { setProducts } = useContext(FiltersContext);
  const { filters } = useContext(FiltersContext);

  const initialProducts = useRef<IProducts[]>([]);
  const getProducts = () => {
    fetch(`https://fakestoreapi.com/products?offset=0&limit=12`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        initialProducts.current = data;
      });
  };

  const filterProducts = () => {
    setProducts(initialProducts.current);
    if (!filters ) {
      return;
    }
    console.log("filters desde  el app principal", filters);
    setProducts((prev) => {
      return prev.filter(
        (product) =>
          product.category.toLocaleLowerCase().trim() ===
            filters.category?.trim() && product.price >= filters.minPrice!
      );
    });
  };

  return {
    getProducts,
    filterProducts,
  };
}
