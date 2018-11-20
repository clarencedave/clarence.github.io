import React from 'react'
import { Link } from 'gatsby'
//import logo from '../images/seattle-angel-logo.png'

const Header = ({ siteTitle }) => (
  
  <div
    style={{
      background: 'lightblue',
      marginBottom: '0',
    }}
  >
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
    
    
     
    <div class= "topnav" >
      <a href="about"> About </a>
      <a href="contact "> Contact </a>
      <a href="/"> News </a>
      <a href= "home"> Home </a>
      
    </div>



</div>
   
    
  
)

export default Header
