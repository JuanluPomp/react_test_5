import { Minus, Plus, Trash2 } from "lucide-react";
import { CartContext, type ProductCart } from "../../context/cart";
import { useContext } from "react";

export default function CartItem({ product }: { product: ProductCart }) {
  const { increaseFromCart, decreaseFromCart, removeFromCart } = useContext(CartContext);

  return (
    <li className="flex justify-between items-center w-full mb-2 border border-gray-300  p-4 shadow-md shadow-sky-500 rounded-lg bg-slate-100">
      {/* Imagen y texto */}
      <div className="flex items-center space-x-4 w-3/4">
        <img
          src={product.image}
          alt={product.title}
          className="w-16 h-16 object-cover rounded"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{product.title}</span>
          <span className="text-gray-600">
            Price: <span className="font-normal">${product.price}</span>
          </span>
        </div>
      </div>

      {/* Controles de cantidad y eliminar */}
      <div className="flex items-center space-x-2 ml-4 w-1/4 justify-end">
        <button
          onClick={() => decreaseFromCart(product)}
          className="flex items-center bg-slate-100 justify-center h-8 w-8 rounded-full "
        >
          <Minus size={16} strokeWidth={3} />
        </button>

        <span className="font-semibold text-lg">{product.quantity}</span>

        <button
          onClick={() => increaseFromCart(product)}
          className="flex items-center bg-slate-100 justify-center h-8 w-8  rounded-full "
        >
          <Plus size={16} strokeWidth={3} />
        </button>

        <button
          onClick={() => removeFromCart(product)}
          className="flex items-center justify-center h-8 w-8 text-red-500 hover:text-red-600"
        >
          <Trash2 size={18} strokeWidth={2} />
        </button>
      </div>
    </li>
  );
}
