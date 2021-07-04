require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Just Green Living",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
          // Name of the database and collection where are books reside
          dbName: 'blog',
          collection: 'posts',
          server: {
              address: 'just-green-living-shard-00-01.sjlvc.mongodb.net',
              port: 27017
          },
          auth: {
              user: process.env.MONGODB_USER,
              password: process.env.MONGODB_PASSWORD
          },
          extraParams: {
              replicaSet: 'Just-green-living-shard-0',
              ssl: true,
              authSource: 'admin',
              retryWrites: true
          }
      }
  },
  ],
};
