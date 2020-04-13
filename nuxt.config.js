
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  
  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    min: 640,
    max: 2000,
    steps: 4,
    format: 'png',
    quality: 80,
    disable: true
  },
  /*
  ** Global CSS
  */
  css: ['~/css/main.css'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/lottie-web.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/markdownit', 'nuxt-responsive-loader'],
  markdownit: {
    injected: true,
    preset: 'default',
    breaks: true,
    html: true
  },
  /*
  ** Generate configuration
  */
  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`),
        };
      });
  },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
