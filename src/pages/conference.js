import React from 'react'
import Layout from '../components/layout'
import video from '../images/Seattle Angel Conference Overview.mp4'
import {Link} from 'gatsby'

const conferencePage = () => (
  <Layout>
      
      <h1>What is the Seattle Angel Conference?</h1>
        <p>The Seattle Angel Conference is a recurring Seattle Angel-driven event where the investors create an LLC, engage in due diligence of the applying startup companies, and ultimately pool funds to invest in one of the presenting finalists. The Seattle Angel Conference is the primary method Seattle Angel uses to find and fund new startups. The Seattle Angel Conference is open to any member of the community interested in learning more about both starting and investing in a new business and to hear the investment pitches from the finalists.</p>

        <h1>Seattle Angel Conference in 60 Seconds:</h1> 
        
        <video width="400" controls>
        <source src={video} type="video/mp4"/>
        <source src={video} type="video/ogg"/>
        </video>
        <h1>Seattle Angel Conference XV - May 15th 2019 Details</h1>
        <p>The Conference is the culmination of many months of due diligence, review, evaluation, and selection by the investors of Seattle Angel. The Conference is the opportunity for the finalists to make their best pitch for why their company deserves the investment. Anyone interested is welcome to attend the event. 
Attend the conference.</p>
        <p>Application deadline for startups to participate in the conferences is 
 <b> February 28th, 2019.</b></p>
        <p>See our <Link to = "/"> Blog </Link> or follow us on twitter for updates <a href = "@nwangelconf">  @nwangelconf </a>

The workshop will start on January 8th, 2019 for both founders and those interested in angel investing in the region. Find details about the workshops and register on Meetup: <a href = "http://meetup.com/Seattle-Angel">http://meetup.com/Seattle-Angel</a></p>
        
        <h2>The Conference Process</h2>
        <p>The Seattle Angel Conference process runs approximately 2 months from the time we finish accepting new entrepreneur applicants to the actual day of the Conference and the awarding of the investment to one finalist.</p>

        <h2>Start-Up Application</h2>
        <p>Any entrepreneur or company with a great idea for a new startup business can apply to the upcoming Seattle Angel Conference.</p>
  
       <h3><b>Startup applications are due February 28th, 2019.</b></h3>
       <h3><b>1. Buy a "Presenting Company" ticket <a href = "tickets"> here. </a></b></h3>
       <h3><b>2. Create a <a href = "http://gust.com/startups"> Gust.com </a> profile ASAP.  Start now, and keep refining!</b></h3>
       <h3><b>3. Apply your company to Seattle Angel Conference <a href ="https://gust.com/organizations/seattle-angel-conference/public_profile"> here.</a></b></h3>

        <p>Gust is an online platform for Start-ups and Investors.  SAC uses Gust to securely and privately collect your company information, business plan and some  due diligence information. For the first week- Focus on your attention on the Short Summaries of your business. Then hone and polish them. 

Concisely, what is it you do for whom?

Fill out everything else, and then keep refining.  Our angel investors will use your 1 page gust profile by September 6th to start ranking the applying companies.  Put your best foot forward.</p>

        <h3>Selection</h3>
        <p>After initial screening by the accredited investor members of the LLC, an extensive due diligence process is performed. Entrepreneurs pitch to the group of investors and receive feedback. The investors form small deep-dive teams to learn more about each entrepreneur’s business and conduct thorough due diligence, both online and in person. A small number of companies are selected to be finalists and present at the Seattle Angel Conference. Each of the finalists has a champion or “deal lead” inside the Investors LLC.</p>

        <h3>Voting</h3>
        <p>On the day of the conference, each finalist delivers their investor pitch to Seattle Angel and all other attendees. Once all the finalists have presented, the members of the Investors LLC are sequestered and vote to determine a single winner.</p>

        <h3>Investment</h3>
        <p>The winner of the Seattle Angel Conference is publicly presented at the closing of the event with a check for the full investment of the Investors LLC.</p>

        <h3>The Seattle Angel Term Sheet</h3>
        <p>The Investors LLC will provide investment in the winning company using a convertible note.
</p>
        <h4>Conference Agenda</h4>
        <li>12:30 – 1:00 Registration</li>
        <li>1:00 – 2:00 Keynote</li>
        <li>2:00 – 3:00 Finalists #1-3 present</li>
        <li>3:00 – 3:30 Break</li>
        <li>3:30 - 4:30 Finalists #4-6 present</li>
        <li>4:30 – 5:30 Closing Speaker</li>
        <li>5:30 – 6:00 Break and Closed Voting</li>
        <li>6:00 – 6:15 Winner Announcement</li>
        <li>6:15 Reception to follow</li>
  

        <h1>Seattle Angel Testimonials:</h1>
        <div class="content-slider">
  <div class="slider">
    <div class="mask">
      <ul>
        <li class="anim1">
          <div class="quote">The Seattle Angel Conference is a phenomenal idea and well executed. As a participating company the diligence with the investors and structure really helped us craft our story, in addition to helping us build relationships with a group of early stage angel investors</div>
          <div class="source">-Robi Ganguly, CEO, Apptentive</div>
        </li>
        <li class="anim2">
          <div class="quote">Working with Seattle Angel and presenting at the Seattle Angel Conference was a real pleasure. Being selected as the winner of the investment was just a part of what I received from Seattle Angel in helping get my company off the ground.</div>
          <div class="source">-Max Baker, CEO, ILLUMAGEAR</div>
        </li>
        <li class="anim3">
          <div class="quote">If you want to become an angel investor and learn best by doing, Seattle Angel gives you a great way of getting started. It’s a forum to meet like-minded investors with whom to collaborate and identify the startup that's the best choice for our collective investment.</div>
          <div class="source">-Christina Storm, Manager, Investors LLC 2012</div>
        </li>
        <li class="anim4">
          <div class="quote">Buddy had a tremendous experience. While we had some experience pitching prior to the SAC, the mentorship, community and networking were very valuable, and we'd highly recommend any early-stage startup consider the SAC in their fundraising and network-building efforts.</div>
          <div class="source">-David McLauchlan, CEO, Buddy Platform, Inc.</div>
        </li>
        
      </ul>
    </div>
  </div>
</div>
        
  
  
  
  
  
  
  
  
  
  
  </Layout>
)

export default conferencePage