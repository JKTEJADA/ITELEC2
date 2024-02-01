
function Navbar(props){
    return(
      <div className='header'>
  
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Behance</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">For you</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Discover</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hire</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Assets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Jobs</a>
          </li>
         
        </ul>
  
        <form class="d-flex "  >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item m-2">
          <img src='/icons/bell.svg'/>
        </li>
        <li class = "nav-item ">
        <span class="badge rounded-pill text-bg-primary m-2 p-2">Login</span>
        </li>
        <li class = "nav-item">
        <span class="badge rounded-pill text-bg-primary m-2 p-2">Register</span>
        </li>
  
  
  
          </ul>
          
      
  
         
         
        </form>
      </div>
    </div>
  </nav>
        
  
      </div>
    );
  
  }
  
export default Navbar;