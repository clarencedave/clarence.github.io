import React from 'react'
import Layout from '../components/layout'
import pic from '../images/nature.jpeg'
import img from '../images/Lighthouse.jpg'



const PortfolioPage = () => (
  <Layout>
    <div class = "all">

    <div class = "rowname">
        <div class = "columnname">
            <div class = "contentname">
            <a class = "thumnail" href= {pic}>
            <img class = "pic" src = {pic} alt = "nature"  width = "100%" />
            </a>
            <h2>Title</h2>
            <p>
            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.
            </p>

            </div>
                </div>
                   

     <div class = "columnname">
            <div class = "contentname">
            <a class = "thumnail" href= {img}>
            <img class = "img" src = {img} alt = "House" width = "100%"/>
            </a>
            <h2>Title</h2>
            <p>
            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.
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

            <img src = {img} alt = "img"  width = "100%" />
            <h2>Title</h2>
            <p>
            Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.
            </p>

            </div>
                </div>      
                     </div>
   

 <div class = "contentname">

<img src = {pic} alt = "sac" width = "100%"  />
<h2>Title</h2>
<p>
Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.
</p>

</div>
       

   </div>
  </Layout>
)

export default PortfolioPage
