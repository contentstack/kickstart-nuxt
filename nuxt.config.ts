// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@timbenniks/contentstack-endpoints']
  },
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_CONTENTSTACK_API_KEY,
      deliveryToken: process.env.NUXT_CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.NUXT_CONTENTSTACK_ENVIRONMENT,
      region: process.env.NUXT_CONTENTSTACK_REGION,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/about", "/contact","/prerender-demo"],
    },
  },
  routeRules: {
    // Server-Side Rendering (SSR) - Dynamic content, real-time data
    '/': { ssr: true },
    '/products': { ssr: true,
      headers:{
      "Cache-Control":"no-store"
    } },
    
    // Static Site Generation (SSG) - Static content, marketing pages
    '/about': { prerender: true },
    '/contact': { prerender: true },
    
    '/ssr-demo': { ssr: true , headers:{
      "Cache-Control":"no-store"
    }},
    '/isr-demo':{
      isr: 60,
      headers:{
         "Cache-Control":"public, max-age=0, s-maxage=60, stale-while-revalidate=30"
      }
    },
    // Client-Side Rendering (CSR) - Interactive features, real-time updates
    '/csr-demo': { ssr: false },
    // Incremental Static Regeneration (ISR) - Content that changes occasionally
    '/blog': { 
      isr:30,
      headers:{
        "Cache-Control":"public, max-age=0, s-maxage=30, stale-while-revalidate=30"
     }
    }
  }
}) 