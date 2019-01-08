import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import logo from '../images/seattle-angel-logo.png'





const homePage = () => (
  
  <Layout>
   
      
   
          <div class = "media"> 
            <div class="hero-image">
              <div class="hero-text">
              <br/>
              <br/>
              <img class = "angel" src= {logo} alt="Angel"/>
              <h3>Investor Led Conference for Seattle Area Entrepreneurs - Sparking the Flame of Angel Investing in The Northwest.</h3>
              <br/>
              <br/>                 
           <Link to = "conference">   <button class=" button "><span>Learn More </span></button></Link>
                         </div>
                            </div>
                            
                               </div>
          
                             
            
          
                               
</Layout>
     



    
)

export default homePage
