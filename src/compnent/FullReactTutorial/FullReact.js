// REACT
// React is a javascript liberary for building user interface.It is not a framework.
// it is know as React ,ReactJs and React.js but React is better.

import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App, { Firstname } from "../../App";
import Component from "../Components/component";
import Context4 from "../Context Api/context4";


//Component:-Any application of react is made up of pieces called as component. 
//component is called in anywhere in app once it made.

//Declarative :-Declarative programming is a programming paradiagm that express 
//the logic of computation without describing it control flow



//ADUANTAGES OF REACT 
//Component based approch
// Uses a declarative approach 
// dom updated  are handled gracefully
//reusible code 
//react is designed for speed 




// REACT FRAGMENT 
// it is react tag which is used  to pack the component so , extra div not create so, css will not
//  be disturb.
// it also reduce the rendered time
//it is used as 
// import React,{Fragment} from "react"
{/* <React.Fragment>
</React.Fragment>  */}
// it is also write as syntactic suger form 
{/* <>
</> */}
// it is also work as same

//JSX FORM (javascript xml or expression)
// when we use html in javascript file than that is called jsx form .
// if we want to use javascrpt in html again  in js file than we use {} and in this we can use only
//  expression not use  condition . 
//example  in JSX/jsx.js file 


//JSX attribute
//when we want to give property of html element than that is called attribute ,
// and when we want to use property in react in JSX than it is called as JSX attribute .


//COMPONENT IN REACT 
// It contains  a  small pieces of code of document .so it is reusable . 

//PROPS IN REACT
// props is stand for properties and in short we say props  are like fn argument in js and
//  attribute in  html

// props is a attribute of jsx which is passes through a component where we want to show  
//  and we will accept a custum props of object in component where it is created .
// for ex:
// props.js and app.js
// where we want to show 
// App.js

{/* <Properties title="props"  subTitle="props are  very usefull" /> */}

//where it is created
//props.js

// const props=(props)=>{
//     return (
//         <>
//           <h1>{props.title}</h1>
//           <h1>{props.subTitle}</h1>
//         </>
//     )
// }

// if i want to show data by array with map method
//01) Make a comonent where recieve the props  
// 02) Make a file which contains object of array with props value of component which i want to show.
// 03) where we want to show first store a data in a variable  of object of array  with map
//  method  and show it by variable.
// for ex:-
// props.js :- where we want to recieve a properties 
// array.js :- where we want to store the data of object of array . 
// app.js  :- where we want to sent the properties



//React hooks

// hooks are the function in react


//01) useState
// use state it retrns a array of two value  current data and updated 
// function and initial value
// hooks/usestate.js
//01) first create the state
//const [count,secount]=useState(1);
// 01) than we can use count in anywhere after update the updated function.


//context api 
// context api is used to avoid props drilling means property pass from 
// one to other and  other to another and so on 
//it give the value directly

// for ex :-context.js

// it has 3 step to create context Api

// 01) first create a  createcontext()
// 02) than wrap the component to provider 
// 03 and than consume that component wrap 

// App.js

// Const Firstname=createContext();
// and exportv it

// <Firstname.provider value="himesh kashyap">
//     <Context4/>
// </Firstname.provider>


// Context4.js
// useContext
// const ctx= useContext(Firstname)



//useEffect 
// when page is refresh than useEffect is called First\and it return a callback function
// useEffect(()=>{
//   call();
// })

// apicaatoget data with axios



// react router
//01) first install reactrouter
//02) import BrowserRouter in index.js and wrap App component by <BrowserRouter> .
{/* <BrowserRouter>
<App/>
</BrowserRouter> */}
//03) import Route and Routes in app coponent.
// and 
{/* <Routes>

<Route  path='/home' element={<Home/>} />
<Route path='/about'  element={<About/>} />
<Route path='*'  element={<Home/>} />// if any one write wrong spelling than Home page is shown 

</Routes> */}
//04)make a header and use Link tag to change the path using to attrribute 
{/* <Link to="/about" class="nav-link" href="#">about</Link> */}

//Use navigate 
first 


//redux toolkit 









// 01) lazy
// 01)npm run build 
// 01)firebase init 
// 02)firebase login (optional)
// 03) firebase deploy








