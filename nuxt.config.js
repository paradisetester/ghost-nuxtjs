const nodeExternals = require('webpack-node-externals')
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
  /*
  ** Global CSS
  */
  css: [
	  '@/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
	  '@/assets/fonts/themify-icons/themify-icons.css',
	  
	  '@/assets/css/bootstrap.css',
	  '@/assets/css/swiper.css',
	  '@/assets/css/slick.css',
	  '@/assets/css/gridrotator-custom.css',
	  '@/assets/css/style.css',
	  '@/assets/css/responsive.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
	  '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
	   '@nuxtjs/pwa'
  ],
  /*
  ** Build configuration
  */
  build: {	
    extend(config, ctx) {
    if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  },
  generate: {
    routes: [
      'index',      
      '_slug',      
      'posts/index',      
      'posts/_slug',      
      'tag/index',      
      'tag/_slug',
	  'author/index',      
      'author/_slug',
    ],
	fallback: true	
  }
   
}
