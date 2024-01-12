import React, { useEffect} from 'react'
import Products from '../products/Products'
import "./home.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productAction } from '../../redux/actions/product'

const Home = () => {
 const {isAuthenticated} = useSelector(state=>state.user)
 const {allProducts,message} = useSelector(state=>state.products)
 const dispatch = useDispatch()
 const navigate = useNavigate()

 useEffect(() => {

      if(!isAuthenticated)
           navigate("/login")
      else{
          dispatch(productAction())   
      }
     
  }, [dispatch,message,isAuthenticated])


  

  return (
       <div className="product">

          <div className="productHeader"> 
                <p>Price</p> 
                <p>Id</p>
                <p>Product</p>
                <p>Actions</p>   
          </div>
           
                 {allProducts && allProducts.map((product,index)=>(
                     <Products product={product} key={index} />
                 ))}

          
        </div>
  )
}

export default Home