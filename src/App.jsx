import { useState } from 'react'
import Header from './components/Header'
import navigation from "./data/navigation.json"

import Hero from "./components/Hero"
import categories from "./data/categories.json"
import brands from "./data/brands.json"

import ProductsSection from "./components/ProductSection"
import products from "./data/products.json"
import ProducsCard from "./components/ProductsCard"



function App() {
  
  

  return (
    <>
      <Header menu = {navigation}></Header>
      <Hero categoria = {categories} marcas = {brands}></Hero>
      <ProductsSection lista = {products}></ProductsSection>
      <ProducsCard tarjeta={products}></ProducsCard>



      <div>Hola mundo</div>
    </>
  )
}

export default App
