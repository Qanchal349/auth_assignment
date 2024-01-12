import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productDetailAction } from '../../redux/actions/product'
import "./productDetail.css"


const ProductDetail = () => {

  const params = useParams()
  const dispatch = useDispatch()
  const {product} = useSelector(state=>state.products)
 
  useEffect(() => {
     dispatch(productDetailAction(params.id))
  }, [dispatch]) 
  
  

  return (
       <div className="productDetail">
            { product && <div className="details">
                    <p>Price : <span>${product.price}</span></p>
                    <p>ProductId : <span>{product.id}</span></p>
                    <p>ProductName : <span>{product.productName}</span></p>
                    <p>Product Rating : <span>{product.rating}</span></p>
                    <p>Product Review : <span>{product.review}</span></p>
             </div>
            }
       </div>
  )
}

export default ProductDetail