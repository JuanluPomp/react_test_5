
export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  
  interface Rating {
    rate: number;
    count: number;
  }

export interface ProductFilters {
    category: string,
    minPrice: number
}