import React from 'react'
import Layout from '../components/layout'


const formPage = () => (
    <Layout>

     <form name = "contact" method = "post" netlify = "true">
     <input type="hidden" name="contact" value="contact" />  
     
    
     
     <label for="Firstname">First Name:</label>
      <input id="Firstname" name="Firstname" placeholder="First Name" type = "text" ></input>
    


      <label for="Lastname">Last Name:</label>
      <input id="Lastname" name="Lastname" placeholder="Last Name" type = "text" ></input>
    


     <label for="Email">Email:</label>
      <input id="Email" name="Email" placeholder="Email@example.com" type = "text"  ></input>
    


     <label for="Address">Address:</label>
      <input id="Address" name="Address" placeholder="Address" type = "text" ></input>
    


      <label for="subject">Subject:</label>
      <textarea id="subject" name="subject" placeholder="Write something.." type = "text" ></textarea>

      <label for="message">Message:</label>
      <textarea id="message" name="message" placeholder="Write something.." type = "text" ></textarea>

      <div data-netlify-recaptcha></div>

   <button type ="submit" >Send</button>
   
  
    </form>


    </Layout>
  )
  
  export default formPage

