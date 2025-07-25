import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../assets/products/productimages'
import CategoryComponent from '../components/CategoryComponent'


const Category = () => {
  return (
    <div>
      <CategoryComponent 
      CategoryType= "New Arrivals"
      />
    </div>
  )
}

export default Category