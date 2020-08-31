import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
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
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/vue-masonry-css.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  server: {
    port: process.env.PORT || 8000
  },

  axios: {
    baseURL: process.env.API_BASE_URL
  },

  auth: {
    strategies: {
      local: {
        // Each endpoint is used to make requests using axios. They are basically extending Axios Request Config .
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
          logout: false,
          user: false
        },

        redirect: {
          // User will be redirected to this path if login is required.
          login: '/login',
          // User will be redirected to this path if after logout, current route is protected.
          logout: '/',
          // User will be redirect to this path after login. (rewriteRedirects will rewrite this path)
          home: '/',
          // User will be redirected to this path by the identity provider after login
          callback: '/login',
        },
        // This option can be used to disable all token handling. Useful for Cookie only flows. (Enabled by default)
        tokenRequired: true,
        // Authorization header type to be used in axios requests.
        tokenType: 'bearer',
        // Set Authorization header for all axios requests
        globalToken: true,
        // This option can be used to disable user fetch after login. Useful if the login response already have the user. To manually set the user, use setUser.
        autoFetchUser: true
      }
    },
    cookie: false,
    localStorage: false,
  }
}
