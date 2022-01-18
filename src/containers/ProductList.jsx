import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem'
import '../styles/ProductList.scss'
import axios from 'axios'

const API = 'https://api.escuelajs.co/api/v1/products?limit=10&offset=1'

const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(async () => {
    const response = await axios.get(API)
    console.log(response)
    setProducts(response.data)
  }, [])


  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map(product => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </div>
    </section>
  )
}

export default ProductList
