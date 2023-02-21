import { useContext } from "react";
import { Firstname } from "../../App";


const Context4=(props)=>{
    const ctx=useContext(Firstname);
    return (
       <>
         <h1>this is {ctx}</h1>
         
       </>
    )
}
export default Context4;