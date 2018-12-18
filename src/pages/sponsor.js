import React from 'react'
import Layout from '../components/layout'
import ktc from '../images/ktc.png'
import bader from "../images/bader.png"
import amazon from "../images/amazon.jpg"
import tags from "../images/tags.png"

const SponsorPage = () => (
  <Layout>
   <br/> 
      <br/>
      <h1>Sponsors</h1>
      <p>Thank you to these remarkable supporters of the Seattle Angel Conference.</p>

      <h2>Sponsors:</h2>

      <a href = "https://www.karrtuttle.com/" >
        <img class = "picture" src = {ktc} alt = "KTC"/>
      </a>
      <p> Fulfilling the legal needs of entrepreneurs, Fortune 500’s and everyone in between.</p>

      <a href = {bader}>
      <img class = "picture" src = {bader} alt = "Bader"/>
      </a>
      <br/>
      <a href = {tags}>
      <img class = "picture" src = {tags} alt = "TAGS"/>
      </a>
      <p>Affiliates :</p>

      <a href = {amazon}>
      <img class = "picture" src = {amazon} alt = "bader"/>
      </a>












  </Layout>
)

export default SponsorPage