import { useState } from 'react'
import Header from './components/Header'
import navigation from "./data/navigation.json"

import Hero from "./components/Hero"
import categories from "./data/categories.json"
import brands from "./data/brands.json"

import ProductsSection from "./components/ProductSection"
import products from "./data/products.json"
import ProductsCard from "./components/ProductsCard"
import ProductDetail from './components/ProductDetail'



function App() {
  

  const [elProducto, colocarProductoSeleccionado] = useState(null)
  

  return (
    <>
      <Header menu = {navigation.menuItems}></Header>
      
      {elProducto ? (
        <ProductDetail
        producto={elProducto}
        volver={() => colocarProductoSeleccionado(null)}
        ></ProductDetail>
      ) : (
        <>
        <Hero categorias = {categories} marcas = {brands}></Hero>

        <ProductsSection // esto va a renderizar otro componente  llamado productCard y le pasaré los productos y el select
        productos= {[...products.componentes, ...products.cables]}
        seleccionar = { colocarProductoSeleccionado}
        ></ProductsSection>
      
      
      </>
      
      )}
      
      
    </>
  )
}

/* logica del operador ternario: Si elProducto tiene un valor (no es null, undefined, false, etc.) → renderiza A
Si elProducto es null (o falso) → renderiza B */



export default App
