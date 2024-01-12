import {configureStore} from '@reduxjs/toolkit'
import { userAuthReducer } from './reducers/auth';
import { productReducer } from './reducers/product';


const store = configureStore({
    reducer:{
       user : userAuthReducer,
       products:productReducer 
    }
})


export default store; 
