module.exports = {
  siteMetadata: {
    title: 'Seattle Angel',
    titleTemplate: "Investor Led Conference for Seattle Area Entrepreneurs",
    description: "Sparking the Flame of Angel Investing in The Northwest",
    url: "https://goofy-mccarthy-935cfb.netlify.com/home",
    image: "/images/seattle-angel-logo.png",
    twitterUsername: "@nwangelconf",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline

    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    }

  ],

}
