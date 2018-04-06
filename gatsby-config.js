const siteName = '[sitename]';

module.exports = {
  siteMetadata: {
    title: `${siteName} Living Styleguide`,
    siteName,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-transformer-yaml',

    {
      resolve: 'gatsby-plugin-sass',
      // options: {
      //   includePaths: [`${__dirname}/node_modules/normalize.css`],
      // },
    },
  ],
};
