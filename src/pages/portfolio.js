import React from 'react'
import Layout from '../components/layout'
import pic from '../images/nature.jpeg'
import img from '../images/Lighthouse.jpg'
import sac from '../images/SAC1.jpg'
import seattle from '../images/seattle.jpg'
import {Link} from 'gatsby'





var countDownDate = new Date("Feb 28, 2019 10:00:00").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds ";
    
   
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }


}, 1000);


var countDownDateMay = new Date("May 15, 2019 1:00:00").getTime();


var y = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDateMay - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("may").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds ";
    
  
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("may").innerHTML = "EXPIRED";
  }


}, 1000);



const PortfolioPage = () => (
  <Layout>
    
    <div class = "all">

    <div class = "rowname">
        <div class = "columnname">
            <div class = "contentname">
            <a class = "thumnail" href= {pic}>
            <img class = "pic" src = {pic} alt = "nature"  width = "100%" />
            </a>
            <h2>Winner: Energy Storage Systems $135,000</h2>
            <h3>SAC VI - November 2015 </h3>
            <p>
            Energy Storage Systems is a Portland company providing onsite energy storage for commercial clients utilizing an All-Iron Flow Battery. 
            </p>
            <b>Finalists</b>
            <p>The other five finalists who pitched were PotaVida providing safer water with certainty using a UV water purification bag; theHUBEdu collecting and organizing educational resources into your own personal digital library; Third and Loom a custom, luxury couture  e-commerce platform; NorthAmerica Talk reaching 200,000+ neighbors weekly with an award winning social community network and Connect2Classes providing an online marketplace for students to discover continuing education classes
            </p>
            </div>
                </div>
                   

     <div class = "columnname">
            <div class = "contentname">
            <a class = "thumnail" href= {img}>
            <img class = "img" src = {img} alt = "House" width = "100%"/>
            </a>
            <h2>Winner: Discuss.io  $155,000</h2>
            <p>
           Second Investment: SocialGlympz $45,000
A Seattle Startup that understands that visuals are the new language of consumers. They are bringing the expertise to the CRM and marketing automation space allowing companies to gather insights, solicit content and run interactive campaigns

Finalists
The other four finalists who pitched were Zealyst, creating specialized games to build a stronger employee community; Real Estate Game Works providing gamification of the continuing education experience for real estate agents; Grow Plastics providing a breakthrough in plastics technology focusing first on plastic cups that are better for the environment and Meshfire
 </p>

            </div>
                </div>
     <div class = "columnname">
        <div class = "contentname">

            <img src = {img} alt = "img"  width = "100%" />
            <h2>Title</h2>
            <p>
            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.
            </p>

            </div>
                </div>           
                <div class = "columnname">
        <div class = "contentname">

            <img src = {seattle} alt = "img"  width = "100%" />
            <Link to = " "><h2>SAC XV May 2019</h2></Link>
            <p>
            DATE AND TIME
            Wed, May 15, 2019
            </p>
            <p class = "time" id="may"></p>
            <p> 1:00 PM – 6:00 PM PDT</p>
  
            </div>
                </div>      
                    
   

 <div class = "contentname">

<img src = {sac} alt = "sac" width = "100%"  />

<h2>Seattle Angel Conference XV Company Applications</h2>
<p>
DATE AND TIME
Thu, February 28, 2019
<p class = "time" id="demo"></p>
</p>
<p>10:00 PM – 10:00 PM PST</p>
</div>
       

   </div>
   </div>
  </Layout>
)

export default PortfolioPage
