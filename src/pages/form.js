import React from 'react'
import Layout from '../components/layout'


const formPage = () => (
    <Layout>

     <form name = "contact" method = "post" netlify = "true">
     <input type="hidden" name="form-name" value="contact" />  
      <p>
      <label>First Name:   <textarea Fname = "Fname " placeholder = "Your First Name" type ="text"/></label>
      </p>

      <p>
      <label>Last Name:   <textarea Lname = "Lname " placeholder = "Your Last name" type ="text"/></label>
      </p>

      <p>
      <label>Address:   <textarea address = "address " placeholder = "Address" type ="text"/></label>
      </p>

      <p>
      <label>Email:   <textarea email = "mail " placeholder = "Email" type ="text"/></label>
      </p>

      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
    


   <button type = "submit">Send</button>
   
  
    </form>


    </Layout>
  )
  
  export default formPage

