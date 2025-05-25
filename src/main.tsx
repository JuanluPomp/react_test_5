
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import {  FiltersProvider } from './context/filters.tsx'
import { CartProvider } from './context/cart.tsx'

createRoot(document.getElementById('root')!).render(
    <CartProvider><FiltersProvider>
    <header>
    <Navbar/>
    </header>
    <main>
      <App />
    </main>
  </FiltersProvider></CartProvider>
    
)  
