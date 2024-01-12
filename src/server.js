import {data} from "./data"
import { Server } from "miragejs"


const server = new Server({timing:1000});
server.post("/api/users",(schema,request)=>{
     let attr = JSON.parse(request.requestBody)
     console.log(attr)
     const isUserExist = data.login.find((user)=>user.password===attr.password)
     if(!isUserExist)
       return {status:false,error:"Invalid email or password"}
     else
       return {status:true,message:"LoggedIn successfully"}
})

server.get("/api/products",(schema,request)=>{
    return  { data:data.itemData,message:"success"}
})

server.get("/api/products/:id",(schema,request)=>{
    return data.itemData[request.params.id]
})
