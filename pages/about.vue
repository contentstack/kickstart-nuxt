<template>
  <div>
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        This page demonstrates Static Site Generation (SSG). The content is pre-rendered at build time for optimal performance.
      </p>
    </div>

    <!-- SSG Info Card -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
        <h2 class="text-xl font-semibold text-blue-900">Static Site Generation (SSG)</h2>
      </div>
      <p class="text-blue-800 mb-4">
        This page is statically generated at build time. The content below is embedded directly in the HTML, 
        making it load instantly and providing excellent SEO performance.
      </p>
      <div class="text-sm text-blue-700">
        <p><strong>Build time:</strong> {{ timedatavar }}</p>
        <p><strong>Rendering strategy:</strong> Static Site Generation</p>
      </div>
    </div>

    <!-- Company Story -->
    <div class="grid lg:grid-cols-2 gap-12 mb-12">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <p class="text-lg text-gray-600 mb-4">
          Founded in 2024, we are passionate about creating exceptional digital experiences using modern web technologies. 
          Our team combines creativity with technical expertise to build solutions that make a difference.
        </p>
        <p class="text-lg text-gray-600 mb-4">
          We believe in the power of static site generation and server-side rendering to deliver fast, 
          reliable, and SEO-friendly websites that provide the best user experience possible.
        </p>
        <p class="text-lg text-gray-600">
          Our mission is to help developers and businesses leverage the full potential of Nuxt 3 and 
          modern web development practices to create outstanding digital products.
        </p>
      </div>
      
      <div class="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
        <div class="text-center">
          <div class="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
          <p class="text-gray-600">Built with performance in mind</p>
        </div>
      </div>
    </div>

    <!-- Values Section -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
          <p class="text-gray-600">We maintain the highest standards in everything we do, from code quality to user experience.</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
          <p class="text-gray-600">We optimize for speed and efficiency, ensuring our solutions are fast and scalable.</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
          <p class="text-gray-600">We embrace new technologies and approaches to solve complex problems creatively.</p>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
          <p class="text-gray-600 text-sm">Frontend Developer</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Mike Chen</h3>
          <p class="text-gray-600 text-sm">Backend Developer</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Emily Davis</h3>
          <p class="text-gray-600 text-sm">UX Designer</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 text-center">
          <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1">Alex Rodriguez</h3>
          <p class="text-gray-600 text-sm">DevOps Engineer</p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="text-xl mb-6 opacity-90">
        Explore our other pages to see different rendering strategies in action.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink 
          to="/blog" 
          class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          View Blog (ISR)
        </NuxtLink>
        <NuxtLink 
          to="/products" 
          class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
        >
          Browse Products (SSR)
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: 'About Us - Nuxt Starter (SSG)',
  meta: [
    { name: 'description', content: 'Learn about our company and see Static Site Generation in action with Nuxt 3' }
  ]
})

definePageMeta({
  prerender: true
})

// Static data - this content is embedded at build time
const { data } = await useFetch('/api/data')
const timedatavar = data.value.timestamp
</script> 