



const Properties=(props)=>{

    return(
        <>
        
  
            <div  key={props.Key}style={{padding:'0',margin:'0'}}>
              <h1>{props.Key}</h1>
              <h1>{props.title}</h1>
              <h3>{props.subTitle}</h3>
              <img src={props.img}  />
              <h5>{props.description}</h5>
            </div>
        </>
    )
}
export default Properties;