import React from 'react'
import Layout from '../components/layout'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import twit from '../images/twit.png'
import meetup from '../images/meetup.png'


const NotFoundPage = () => (
  <Layout>
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
      </h3>
     
</div>
</div>
</div>
</div>
  
  </Layout>
)

export default NotFoundPage
