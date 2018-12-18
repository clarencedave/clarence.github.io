import React from 'react'
import Layout from '../components/layout'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const tweetPage = () => (
  <Layout>
    
    <div className=" Position">
<div className="inside">
<TwitterTimelineEmbed sourceType="profile" userId={2829884545} options={{height: 400}} />
<br/>
<TwitterTimelineEmbed sourceType="profile" userId={397377701} options={{height: 400}} />
</div>
</div>





   </Layout>  
)

export default tweetPage
