import React from 'react'
import Layout from '../components/layout'
import sac from '../images/SAC1.jpg'
import seattle from '../images/seattle.jpg'
import finalist from '../images/finalist.jpg'
import discuss from '../images/discuss.png'
import social from '../images/social.png'
import book from '../images/book.jpg'
import dailydollar from '../images/dailydollar.jpg'
import dailydollarlogo from '../images/dailydollarlogo.jpeg'
import stagingdesign from '../images/stagingdesign.png'
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
    <br/> 
      <br/>
    <div class = "all">

    <div class = "rowname">

                      <div class = "columnname">
        <div class = "contentname">

            <img src = {finalist} alt = "img"  width = "100%" />
           <h2>SAC VI - November 2015</h2>
           <h1>Winner: Energy Storage Systems $135,000</h1>
            <p>
            Energy Storage Systems is a Portland company providing onsite energy storage for commercial clients utilizing an All-Iron Flow Battery. 
            </p>
            <b>Finalists</b>
            <p>The other five finalists who pitched were PotaVida providing safer water with certainty using a UV water purification bag; theHUBEdu collecting and organizing educational resources into your own personal digital library; Third and Loom a custom, luxury couture  e-commerce platform; NorthAmerica Talk reaching 200,000+ neighbors weekly with an award winning social community network and Connect2Classes providing an online marketplace for students to discover continuing education classes</p>
  
            </div>
            </div>       
            
            <div class = "columnname">
        <div class = "contentname">

            <img src = {discuss} alt = "img"  width = "100%" />
           <h2>SAC V - May 2014</h2>
           <h1>Winner: Discuss.io  $155,000</h1>
            <p>
            Discuss.IO is a Seattle based company whose mission is to simplify consumer market research. They use video conferencing and crowdsourcing to connect brands and consumers.</p>
            <img src = {social} alt = "img"  width = "100%" />
            <h2>Second Investment: SocialGlympz $</h2>
            <p>A Seattle Startup that understands that visuals are the new language of consumers. They are bringing the expertise to the CRM and marketing automation space allowing companies to gather insights, solicit content and run interactive campaigns</p>
            <b>Finalists</b>
            <p>The other four finalists who pitched were Zealyst, creating specialized games to build a stronger employee community; Real Estate Game Works providing gamification of the continuing education experience for real estate agents; Grow Plastics providing a breakthrough in plastics technology focusing first on plastic cups that are better for the environment and Meshfire</p>
           
            </div>
            </div>       



            
            <div class = "columnname">
        <div class = "contentname">

            <img src = {book} alt = "img"  width = "100%" />
           <h2>SAC IV- Nov 2013</h2>
           <h1>Winner: Booktrope  $205,000</h1>
            <p>
            Booktrope is a Seattle based company that has been building their web based book publishing model and technologyfor two years. Their mission is to reinvent book publishing, using web-­‐‑based tools forbook development, production and marketing. </p>
            <h1>Second Investment:  LaserMotive  $55,000</h1>
            <p>a Seattlestartup who delivers electricity via light to critical assets </p>
            <b>Finalists</b>
            <p>The other five finalists who pitched were PotaVida providing safer water with certainty using a UV water purification bag; theHUBEdu collecting and organizing educational resources into your own personal digital library; Third and Loom a custom, luxury couture  e-commerce platform; NorthAmerica Talk reaching 200,000+ neighbors weekly with an award winning social community network and Connect2Classes providing an online marketplace for students to discover continuing education classes</p>
            
            </div>
            </div>   

            
            <div class = "columnname">
        <div class = "contentname">

            <img src = {dailydollar} alt = "img"  width = "100%" />
           <h2>SAC III- May 2013</h2>
           <h1>Winner:</h1>
           <h2>Daily Dollar  (now Piper)  $165,000</h2>
          <a href = "www.PiperUp.com"> <p>www.PiperUp.com</p></a>
            <p>
            www.dailydollar.com <br/>Seattle Angel Conference Invesment Daily Dollar   
            DailyDollar was selected as the winner of its third investment competition, held in Seattle, WA,  at the HUB. DailyDollar is a Seattle-based company that began 9 months ago, propelled by participating with Startup Next.  Their mission is to eliminate the paper receipt.  They are working with merchants to get consumer receipts sent straight to the cloud. DailyDollar will receive a $165,000 angel award investment. - See more at:mhttp://www.seattleangelconference.com/2013_05_01_archive.html
            </p>
            <b>Finalists: </b>
            <p>The following companies were selected by the investment team to deliver ten-minute business plan pitches:</p>
           <p> Phytelligence – Biotech; Pullman WA </p> 
           <a href = "http://www.phytelligence.com"> www.phytelligence.com </a>
            <p>A high-tech provider of genetic services and hard-to-get plants with superior vigor, uniformity and value for commercial growers & nurseries </p>
            <p> Nimia - Software; Seattle WA </p> 
            <a href = "http://www.nimia.com"> www.nimia.com </a>
            <p>A platform where Premium Media Producers Store, Manage and Directly License Motion Picture Assets.</p>
            <p> Guide Analytics - Services; Bellevue WA </p> 
            <a href = "http://www.guideanalytics.com"> www.guideanalytics.com</a>
            <p>A platform where Premium Media Producers Store, Manage and Directly License Motion Picture Assets.</p>
            <p> Guide Analytics - Services; Bellevue WA </p> 
            <a href = "http://www.dailydollar.com"> www.dailydollar.com</a>
            <img src = {dailydollarlogo} alt = "img"  width = "100%" />
            <p>Partnering with merchants to get your receipts sent straight to the cloud. Available when you want it, gone when you don't. It is time to lose the shoebox and stop the wallet receipt bulge. DailyDollar’s enterprise platform connects receipt data across existing merchant POS silos for use by both marketers and consumers. </p>
            <p> Staging and Design Network - Web Services; </p> 
            <a href = "www.StagingandDesignNetwork.com"> www.StagingandDesignNetwork.com</a>
            <img src = {stagingdesign} alt = "img"  width = "100%" />
            <p>Online member based home furnishings network with some of the newest features available in the market for it's targeted members. </p>
            <p> Shift Labs - Medical Devices; Seattle WA</p> 
            <a href = " http://www.shiftlabs.com"> www.shiftlabs.com</a>
            <p>Works with Makers and Hackers to build simple, inexpensive, human-centered devices that improve health and wellness in global markets.</p>
           
            </div>
            </div>       

             <div class = "columnname">
        <div class = "contentname">

           
           <h2>SAC II- Dec 2012</h2>
           <h1>Winner:  exoLabs</h1>
           <a href = "www.exolabs.com">www.exolabs.com </a>
            <p>
            Booktrope is a Seattle based company that has been building their web based book publishing model and technologyfor two years. Their mission is to reinvent book publishing, using web-­‐‑based tools forbook development, production and marketing. </p>
            <h1>Second Investment:  LaserMotive  $55,000</h1>
            <p>ExoLabs brings collaboration to the science classroom by connecting and sharing your classroom microscope with the students iPads. With 2500 schools using iPads for classwork, they see a growing opportunity to make more engaging and collaborative science. </p>
            <b>Finalists:</b>
            <p>The Six Finalists for SAC II were:</p>
            <li>Corengi</li>
            <li>Redpoint International</li>
            <li>Exo Labs</li>
            <li>Suncrest Farms</li>
            <li>Writer.ly</li>
            <li>Talk to the Manager</li>
            
            </div>
            </div>   


             <div class = "columnname">
        <div class = "contentname">

            
           <h2>SAC I- May 2012</h2>
           <h1>WinnerILLUMAGEAR Inc  May 2012. $100,000 to be invested in the winner of the conference.</h1>
            <p>
            Max Baker, CEO,
            </p>
            <a href = "www.illumagear.com">www.illumagear.com</a> <br/>
            
            <p>Max Baker leveraged his strong passion for the construction industry to found ILLUMAGEAR, a company focused on building quality products that illuminate workers and consumers making them safer and more prepared in any environment. ILLUMAGEAR’s initial product is The Halo LightTM, a 360-degree light system worn at head-level that produces a ring of light around the wearer enabling him or her to see and be seen in all directions at all times, especially in low light conditions.</p>
            <p>Finalists <a href = "www.socialglympz.com">www.socialglympz.com </a><a href = "www.discuss.io"> www.discuss.io </a> <a href = "www.energystoragesystems.com"> www.energystoragesystems.com</a></p>
  
            </div>
            </div> 

               
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
