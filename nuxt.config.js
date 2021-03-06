export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "Escinter",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "A Escinter é uma empresa familiar com 30 anos de atuação no mercado de interiores de espaços corporativos."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  responsiveLoader: {
    name: "img/[name]-[hash]-[width].[ext]",
    adapter: require("responsive-loader/sharp"),
    placeholder: true,
    placeholderSize: 50,
    min: 700,
    max: 3500,
    steps: 3,
    format: "jpg",
    quality: 65,
    disable: false
  },
  /*
   ** Global CSS
   */
  css: ["~/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/lottie-web.js" },
    { src: "~/plugins/VueFlickity.js", ssr: false },
    { src: "~/plugins/lazysizes.client.js" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-responsive-loader", "vue-scrollto/nuxt"],
  /*
   ** Generate configuration
   */
  generate: {},
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  }
};
