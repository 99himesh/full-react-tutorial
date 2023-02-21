import logo from './logo.svg';
import './App.css';
import Jsx from './compnent/JSX/jsx';
import Component from './compnent/Components/component';
import Properties from './compnent/props/props';
import sdata from './compnent/props/array'
import UseStates from './compnent/hooks/useState';
import Context1 from './compnent/Context Api/context1';
import { createContext } from 'react';
import Context4 from './compnent/Context Api/context4';
import UseEhoook from './compnent/useEffect/useEffect';
import ApiCall from './compnent/apicalltogetdata/apicall';
import { Route,Router,Routes,Switch } from 'react-router-dom';
import Home from './compnent/reactRouter/home';
import About from './compnent/reactRouter/about';
import Header from './compnent/reactRouter/header';
import UseParamss from './compnent/useparam/useParam';
  
const Firstname=createContext();
function App() {
  
 
 

      //  console.log(sdata)
  const propsOfmap= sdata.map(item=>{
    return (
       <>
         <Properties
        Key={item.id}
        title={item.title}
        subTitle={item.subTitle}
        img={item.img}
        description={item.description}
       />
       </>
    )
  })






  return (
    <>
      {/* <Firstname.Provider value="himesh kashyap">
          <Context4/>
      </Firstname.Provider> */}
          
        {/* <UseEhoook/> */}
        
       {/* <Jsx/>
       <Component/> */}

       {/* <ApiCall/> */}

      {/* <UseStates/> */}


    {/* {propsOfmap} */}
 <Header/>

  <Routes>
  <Route  path='/home' element={<Home/>} />
  <Route path='/about'  element={<About/>} />
  <Route path='*'  element={<Home/>} />
  <Route path='/about/:abouthinner'  element={<UseParamss/>} />
  
  </Routes>




    </>
  );
}

export default App;

export {Firstname};
