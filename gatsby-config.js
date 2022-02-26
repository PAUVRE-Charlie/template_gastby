// The default metadata that will be used in the SEO component
export const siteMetadata = {
  title: '', // the default name of the tab
  description: '', // the description of your website
  image: '', // image that appears below the link when sharing
  url: '', // the url where your site will be
};

/*
    The librairies added to the default gastby starter pack. To in

    npm install --save-dev prettier gatsby-plugin-preact preact preact-render-to-string gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp gatsby-plugin-react-helmet
*/
export const plugins = [
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet', // to use a SEO component (that will contain the metadata of your page)
  'gatsby-plugin-preact', // to use preact instead of react
  {
    resolve: 'gatsby-source-filesystem', // the location of your images for queries
    options: {
      name: 'images',
      path: `${__dirname}/src/images/`,
    },
  },
  /*
  The config section necessary to use react-i18next (to obtain a multi-language website)
  --- to install it, use npm install --save gatsby-plugin-react-i18next i18next react-i18next

  if you do not need it, please remove the translations folder located at the root of this project

  {
    resolve: `gatsby-source-filesystem`, // the location of your translations files for react-i18next
    options: {
      path: `${__dirname}/translations`,
      name: `translations`,
    },
  },
  {
    resolve: 'gatsby-plugin-react-i18next',
    options: {
      localeJsonSourceName: 'translations', // use the same name as the gatsby-source-filesystem folder you put for translations
      languages: ['en', 'fr'],
      defaultLanguage: 'en',
      i18nextOptions: {
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
        },
        // keySeparator: false,
        // nsSeparator: false,
      },
    },
  },
  */
];
