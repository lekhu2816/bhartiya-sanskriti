import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);
const StoreContextProvider=(props)=>{
    const[token,setToken]=useState("")
    
    useEffect(()=>{
     setToken(localStorage.getItem('token'));
     if(token){
        
     }
    },[])
    const  SERVER_URL='http://localhost:5001'
    const contextValue={
     SERVER_URL,
     token,setToken
    }
    return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
    )
}
export default StoreContextProvider;