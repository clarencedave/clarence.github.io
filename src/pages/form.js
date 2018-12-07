import React from 'react'
import Layout from '../components/layout'


const formPage = () => (
    <Layout>

     <form name = "contact" method = "post" netlify = "true">
      
      <p>
      <label>First Name:   <input Fname = "Fname " placeholder = "Your First Name" type ="text"/></label>
      </p>

      <p>
      <label>Last Name:   <input Lname = "Lname " placeholder = "Your Last name" type ="text"/></label>
      </p>

      <p>
      <label>Address:   <input address = "address " placeholder = "Address" type ="text"/></label>
      </p>

      <p>
      <label>Email:   <input email = "mail " placeholder = "Email" type ="text"/></label>
      </p>
   <button type = "submit">Send</button>
   
    </form>


    </Layout>
  )
  
  export default formPage

