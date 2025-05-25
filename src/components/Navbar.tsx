import { CartButton } from "./cart/CartButton";

export default function Navbar() {
  return (
    <nav className=' w-full bg-blue-500 flex justify-between px-10 items-center'>
        <h1 className='text-white text-3xl font-bold text-center py-4 mx-0'>Shoping Cart</h1>
        <div className=" flex justify-end items-center gap-4 font-bold uppercase text-white">
            <a href="#">Users</a>
            <a href="#">About</a>
            <CartButton/>
        </div>
    </nav>
  )
}
