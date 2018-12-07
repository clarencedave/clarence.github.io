import React from 'react'
import Layout from '../components/layout'


const formPage = () => (
    <Layout>

     <form name = "contact" method = "post" netlify = "true">
     <input type="hidden" name="form-name" value="contact" />  
     
     <label for="Firstname">First Name:</label>
      <textarea id="Firstname" name="Firstname" placeholder="First Name" ></textarea>
    


      <label for="Lastname">Last Name:</label>
      <textarea id="Lastname" name="Lastname" placeholder="Last Name" ></textarea>
    


     <label for="Email">Email:</label>
      <textarea id="Email" name="Email" placeholder="Email@example.com" ></textarea>
    


     <label for="Address">Address:</label>
      <textarea id="Address" name="Address" placeholder="Address" ></textarea>
    


      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
    


   <button type = "submit">Send</button>
   
  
    </form>


    </Layout>
  )
  
  export default formPage

