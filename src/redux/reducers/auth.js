import { createReducer } from "@reduxjs/toolkit";


export const userAuthReducer = createReducer({},{

    // login
    loginRequest:(state)=>{
          state.loding=true
          state.isAuthenticated=false;
    },

    loginSuccess:(state,action)=>{
         state.loading = false 
         state.message=action.payload 
         state.isAuthenticated=true; 
    },

    loginFail:(state,action)=>{
          state.loading=false;
          state.isAuthenticated=false;
          state.error = action.payload 
    },
      clearError:(state)=>{
            state.loading=false;
            state.error = null
      },
      clearMessage:(state)=>{
            state.loading=false;
            state.message = null
      },

})