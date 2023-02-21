import { useState } from "react";


const UseStates=()=>{
    const [count ,setCount]=useState(0);
    
    const clickedMe=()=>{
        setCount(count+1)
      
        } 

    return (
        <>
          <h1 style={{textAlign:'center'}}> {count}</h1>
          <div   style={{display:'flex', justifyContent:'center'}}>
          <button onClick={clickedMe}>clicked</button>
          </div>
       </>
        )
}
export default UseStates;