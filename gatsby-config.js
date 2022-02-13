const myCustomQueries = {
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 1080px)",
  l: "(max-width: 1280px)",
  xl: "(max-width: 1536px)",
}

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kpp2340xmxy9`,
        accessToken:  `BOIptvas6UBnSw6jhUAxbJXcYu86QZDpnnpoiow8mx4`,
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
  ],
}
