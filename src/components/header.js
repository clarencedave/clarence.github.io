import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/seattle-angel-logo.png'

const Header = ({ siteTitle }) => (
  
  <div
    style={{
      
      marginBottom: '0',
    }}
  >
  <div class="header">
  
  

  <nav role="navigation">
 <div id="menuToggle">
  
   <input type="checkbox" />
   
  
   <span></span>
   <span></span>
   <span></span>
   
   
  
   <ul id="menu">
   <a   href="home" >
   <img src= {logo} alt="Angel"/>
      </a>
       <a href="/"><li> Home </li></a> 
       <a href="about"><li>About</li> </a> 
       <a href="#resource"> <li>Resources</li> </a> 
       <a href="contacts"><li>Leadership</li></a>
       <a href="form"><li>Contact Us</li></a>
   </ul>
 </div>
</nav>
 
  
         </div>



    <div
      style={{
        margin: 'auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        
        <Link
          
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    
          
     
    

</div>
   
    
  
)

export default Header
