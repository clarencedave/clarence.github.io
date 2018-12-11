import React from 'react'
import Layout from '../components/layout'



const TicketsPage = () => (
  <Layout>
     
      <form name = "tickets" method = "post" netlify = "true">
     <input type="hidden" name="tickets" value="contact" />  
     
     <label for="NameonCard"> Name on Card:</label>
    <input id="NameonCard" name="NameonCard" placeholder="Your Name Here" type = "text" ></input>
    


      <label for="Creditcardnumber">Credit card number:</label>
      <input id="Creditcardnumber" name="Creditcardnumber" placeholder="1111-2222-3333-4444" type = "text" ></input>
    


     <label for="ExpMonth">Exp Month:</label>
      <input id="ExpMonth" name="ExpMonth" type = "text"  ></input>
    

      <label for="ExpYear">Exp Year:</label>
      <input id="ExpYear" name="ExpYear"  type = "text" ></input>
    
    <br/>
    <br/>
    <h3>Billing Address</h3>

      
     <label for="Firstname">First Name:</label>
      <input id="Firstname" name="Firstname" placeholder="First Name" type = "text" ></input>
    


      <label for="Lastname">Last Name:</label>
      <input id="Lastname" name="Lastname" placeholder="Last Name" type = "text" ></input>
    


     <label for="Email">Email:</label>
      <input id="Email" name="Email" placeholder="Email@example.com" type = "text"  ></input>
    


     <label for="Address">Address:</label>
      <input id="Address" name="Address" placeholder="Address" type = "text" ></input>
    


      <label for="CompanyName">Company Name:</label>
      <input id="CompanyName" name="CompanyName" placeholder="Write something.." type = "text" ></input>

      <label for="message">Message:</label>
      <textarea id="message" name="message" placeholder="Write something.." type = "text" ></textarea>

      <div data-netlify-recaptcha></div>

   <button type ="submit">Send</button>
   
   </form>
  
  </Layout>
)

export default TicketsPage
