/** @format */

import axios from "axios";

export const productAction = () => async (dispatch) => {
  try {

    dispatch({ type: "getProductRequest" });
    const { data } = await axios.get(`/api/products`);
    console.log(data)
    dispatch({ type: "getProductSuccess", payload: data})
 
  } catch (error) {
    dispatch({ type: "getProductFail", payload: "Something went wrong" });
  }
};


export const productDetailAction = (id) => async (dispatch) => {
    try {
  
      dispatch({ type: "getProductDetailRequest" });
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch({ type: "getProductDetailSuccess", payload: data });
  
    } catch (error) {
      dispatch({ type: "getProductDetailFail", payload: "Something went wrong" });
    }
  };