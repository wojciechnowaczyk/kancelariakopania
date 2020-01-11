module.exports = {
  siteMetadata: {
    title: `Kancelaria Radcy Prawnego Joanna Kopania`,
    description: `Kancelaria Radcy Prawnego Joanna Kopania działa od 2013 roku, świadcząc szeroko rozumianą pomoc prawną dla przedsiębiorców i osób fizycznych. Zajmujemy się reprezentacją Klientów w postępowaniach sądowych i windykacyjnych, przygotowywaniem pism procesowych, wniosków, umów, porozumień, regulaminów i innych dokumentów wymaganych przez Klientów, przygotowywaniem opinii prawnych, jak również udzielaniem porad prawnych. Usługi prawne świadczymy w języku polskim, języku francuskim oraz języku angielskim. Chcemy aby nasze usługi prawne stanowiły dla Państwa rzetelne wsparcie na co dzień, dlatego zapewniamy szybką komunikację z prowadzącym sprawę prawnikiem oraz terminowe realizowanie powierzonych zadań.`,
    author: `Wojciech Nowaczyk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kancelaria Radcy Prawnego Joanna Kopania`,
        short_name: `Kancelaria Kopania`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#86592d`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cinzel`,
            subsets: [`latin-ext`],
          },
          {
            family: `Lato`,
            subsets: [`latin-ext`],
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
