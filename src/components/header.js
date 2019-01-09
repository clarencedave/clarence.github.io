import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/seattle-angel-logo.png'
import blog from '../images/blog.png'
import leader from '../images/leadership.png'
import event from '../images/event.png'
import entrepreneurs from '../images/entrepreneurs.png'
import conference from '../images/conference.png'
import sponsor from '../images/sponsor.png'
import mail from '../images/mail.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twit from '../images/twit.png'
import meetup from '../images/meetup.png'





const Header = ({ siteTitle }) => (
  
  <div style={{
    background: 'darkblue',
    marginBottom: '1.45rem',
  }}>
    
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.0rem 2.0875rem',
      }}
    >
    </div>
    

  <div class="header">
  
  

  <nav role="navigation">
 <div id="menuToggle">
  
   <input type="checkbox" />
   
  
   <span></span>
   <span></span>
   <span></span>
   
  
   <ul id="menu">
   <Link to="home" >
   <img src= {logo} alt="Angel"/>
      </Link>
      <Link to="/"><li> <img src = {blog} alt = "Blog"/> Blog </li></Link>
      <Link to="contacts"><li><img src = {leader} alt = "Leadership"/> Team</li></Link>
      <Link to="form"><li><img src = {mail} alt = "Email"/> Contact Us</li></Link>
      <Link to="portfolio"><li><img src = {event} alt = "Event"/> Events</li></Link>
      <Link to="entrepreneurs"><li><img src = {entrepreneurs} alt = "Entrepreneurs"/> Entrepreneurs</li></Link>
      <Link to="sponsor"><li><img src = {sponsor} alt = "Sponsors"/> Sponsors</li></Link>
      <Link to="conference"><li><img src = {conference} alt = "Conference"/> Conference</li></Link>
      
       
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
      
       <a  href= "https://web.facebook.com/SeattleAngelConference?_rdc=1&_rdr"> <img class = "fb" src= {facebook} alt="fb" /></a>
       <a  href= " https://www.linkedin.com/company/seattle-angel-conference/about/"> <img class = "in" src= {linkedin} alt="in"/></a>
       <a  href= "https://twitter.com/@nwangelconf"> <img   src= {twit} alt="twit"class = "twit"/></a>
       <a  href= "https://www.meetup.com/Seattle-Angel/"> <img  src= {meetup} alt="meetup"class = "mail"/></a>

       <br/>
    
       Copyright © 2012 Seattle Angel Sechrest@SeattleAngelConference.com. Awesome Inc. 
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
