const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  build: {
    extractCSS: true
  },
  serverMiddleware: [
    '../api/auth',
    '../api/oauth2mockserver'
  ],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@@'],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://localhost:3000'
  },
  plugins: [
  ],
  auth: {
    redirect: {
      callback: '/callback',
      logout: '/signed-out'
    },
    strategies: {
      local: false,
      shibboleth: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://fosterstage.auth.us-west-2.amazoncognito.com/oauth2/authorize',
        userinfo_endpoint: 'https://r4cq2hhfv4.execute-api.us-west-1.amazonaws.com/latest/userInfo',
        // userinfo_endpoint: 'https://fosterstage.auth.us-west-2.amazoncognito.com/oauth2/userInfo',
        scope: ['email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
        access_token_endpoint: 'https://fosterstage.auth.us-west-2.amazoncognito.com/oauth2/token',
        response_type: 'code',
        token_type: 'Bearer',
        redirect_uri: 'http://localhost:3000/callback',
        client_id: '3nic7mc5dimiu0l35d1glpqnor',
        token_key: 'id_token',
        grant_type: 'authorization_code'
      }
    }
  }
}
