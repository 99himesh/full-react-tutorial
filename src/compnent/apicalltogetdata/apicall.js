import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCall=()=>{
    const [num,setnum]=useState(1);
 
    const getdatatoapi=()=>{
      const res  =axios.get(`https://pokeapi.co/api/v2/pokemon/ditto/`);
    console.log(res);
  
    }
    
    
   
     useEffect(()=>{
        getdatatoapi();
     })

    return (
        <>
        <h1>you choose {num} value</h1>
           <select value={num}  onChange={((e)=> setnum( e.target.value))}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>


           </select>
        </>
    )
}
export default ApiCall;