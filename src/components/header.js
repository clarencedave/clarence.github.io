import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/seattle-angel-logo.png'
import blog from '../images/blog.png'
import leader from '../images/leadership.png'
import event from '../images/event.png'
import entrepreneurs from '../images/entrepreneurs.png'
import conference from '../images/conference.png'
import sponsor from '../images/sponsor.png'
import about from '../images/about.png'
import mail from '../images/mail.png'
import src from '../images/source.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twit from '../images/twit.png'
import meetup from '../images/meetup.png'





const Header = ({ siteTitle }) => (
  
  <div
    style={{
      background:'#3A3A3A',
      marginBottom: '1.45rem 1.0875rem',
      padding: '1.45rem 1.0875rem',
      
    }}>
    
    


  <div class="header">
  
  

  <nav role="navigation">
 <div id="menuToggle">
  
   <input type="checkbox" />
   
  
   <span></span>
   <span></span>
   <span></span>
   
  
   <ul id="menu">
   <a    href="home" >
   <img src= {logo} alt="Angel"/>
      </a>
       <a href="/"><li> <img src = {blog} alt = "Blog"/> Blog </li></a> 
       <a href="about"><li><img src = {about} alt = "About"/> About</li> </a> 
       <a href="resource"> <li> <img src = {src} alt = "Resources"/> Resources</li> </a> 
       <a href="contacts"><li><img src = {leader} alt = "Leadership"/> Leadership</li></a>
       <a href="form"><li><img src = {mail} alt = "Email"/> Contact Us</li></a>
       <a href="portfolio"><li><img src = {event} alt = "Event"/> Events</li></a>
       <a href="entrepreneurs"><li><img src = {entrepreneurs} alt = "Entrepreneurs"/> Entrepreneurs</li></a>
       <a href="sponsor"><li><img src = {sponsor} alt = "Sponsors"/> Sponsors</li></a>
       <a href="conference"><li><img src = {conference} alt = "Conference"/> Conference</li></a>
       
   </ul>
   </div>
   </nav>
 
  
         </div>

         <div class="footer">
  <div id="button"></div>
<div id="container">
<div id="cont">
<div class="footer_center">
	   <h3>
       Find us on :
       <br/>
      
       <a  href= "https://web.facebook.com/SeattleAngelConference?_rdc=1&_rdr"> <img src= {facebook} alt="fb" class = "fb"/></a>
       <a  href= " https://www.linkedin.com/company/seattle-angel-conference/about/"> <img src= {linkedin} alt="in"class = "in"/></a>
       <a  href= "https://twitter.com/@nwangelconf"> <img src= {twit} alt="twit"class = "twit"/></a>
       <a  href= "https://www.meetup.com/Seattle-Angel/"> <img src= {meetup} alt="meetup"class = "mail"/></a>

       <br/>
    
       Copyright © 2013 Seattle Angel. Awesome Inc. 
      </h3>
     
</div>
</div>
</div>
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
