import React from 'react'
//import { Link } from 'gatsby'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twit from '../images/twit.png'
import mail from '../images/gmail.png'
import Layout from '../components/layout'
import logo from '../images/seattle-angel-logo.png'



const homePage = () => (
  <Layout>

      




          <div class = "media"> 
            <div class="hero-image">
              <div class="hero-text">
              <img src= {logo} alt="Angel"/>
              <h1>A non-profit corporation. Sparking the flame of angel investing in the Northwest</h1>
              <br/>
              <br/>
              
              <h1>Find Us On:</h1>
             <a  href= "https://web.facebook.com/SeattleAngelConference?_rdc=1&_rdr"> <img src= {facebook} alt="fb" class = "fb"/></a>
               <a  href= "https://www.linkedin.com/feed/"> <img src= {linkedin} alt="in"class = "in"/></a>
                 <a  href= "https://twitter.com/@nwangelconf"> <img src= {twit} alt="twit"class = "twit"/></a>
                   <a  href= "https://www.google.com/intl/fil/gmail/about/#"> <img src= {mail} alt="mail"class = "mail"/></a>

                <br/>
                   <br/>
                   
                      <button class = "but" >< a href = "/"> Learn More! </a></button>
                         </div>
                            </div>
                            
                               </div>
          


          
            
                       

          

</Layout>
     



    
)

export default homePage
