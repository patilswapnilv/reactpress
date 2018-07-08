module.exports = {
  // used by ./services/wpapi to create api url
  wordpressApiUrl: "https://dev-reactpress.pantheonsite.io/wp-json",
  theme: "default",
  siteInformations: {
    name: "Hippogriff",
    slogan:
      "Create a SEO-friendly React front-end in minutes for you Wordpress, without configuring boring stuff"
  },
  mainMenuLinks: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "/page?slug=about",
      as: "/page/about"
    },
    {
      title: "Github",
      href: "https://github.com/nyl-auster/reactpress",
      as: ""
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
};
