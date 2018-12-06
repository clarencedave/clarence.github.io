import React from 'react'


import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
     <div class="row">
  <div class="col-75">
    <div class="container">
    <form name = "contact" method = "post" netlify = "true" data-netlify-honetpot = "bot-field">
    <label for="fname"> Full Name</label>
    <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
    <label for="email"> Email</label>
    <input type="text" id="email" name="email" placeholder="john@example.com"/>
    <label for="adr"> Address</label>
    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
    <label for="city"> City</label>
    <input type="text" id="city" name="city" placeholder="New York"/>

    <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
              <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
    <button type="submit" value="Submit">Submit</button>
              </div>
            </div>
            </form>
                </div>
                    </div>
                        </div>
  </Layout>
)

export default SecondPage
