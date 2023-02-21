import { Link } from "react-router-dom";

const Header=()=>{
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  
 
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/home" class="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" href="#">about</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
export default Header ;