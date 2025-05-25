import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import Cart from "./Cart"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/useCart"

export function CartButton() {
  const {totalItems} = useCart()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" text-white font-bold" variant={'ghost'}>
          <ShoppingCart/>Cart {totalItems >=1 && <span className=" bg-amber-500 rounded-full px-1">{totalItems}</span>} 
        </Button>
      </SheetTrigger>
      <SheetContent 
      >
            <Cart/>
        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
