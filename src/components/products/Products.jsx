import React from 'react'
import "./products.css"
import { Link } from 'react-router-dom'

const Products = ({product}) => {


  return (
     <div className="singleProduct"> 
          <p>{product.price}</p> 
          <p>{product.id}</p>
          <p>{product.name}</p>
          <Link to={`/product/${product.id}`} className='link'>View</Link>     
     </div>
  )
}

export default Products