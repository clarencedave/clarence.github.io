import React from 'react'
import Layout from '../components/layout'


const formPage = () => (
    <Layout>

     <form name = "contact" method = "post" netlify>
     <input type="hidden" name="form-name" value="contact" />  
    <input Fname = "Fname " placeholder = "Your First Name" type ="text"/>
    <input Lname = "Lname " placeholder = "Your Last name" type ="text"/>
    <input address = "address " placeholder = "Address" type ="text"/>
    <input email = "mail " placeholder = "Email" type ="text"/>
    <button type = "submit">Send</button>
    </form>


    </Layout>
  )
  
  export default formPage

