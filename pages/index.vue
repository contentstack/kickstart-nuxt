<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-lg mb-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Nuxt Starter
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          A comprehensive starter demonstrating SSR, SSG, and ISR strategies
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/blog" 
            class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Blog
          </NuxtLink>
          <NuxtLink 
            to="/products" 
            class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Products
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Rendering Strategy Info -->
    <div class="grid md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div class="flex items-center mb-4">
          <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
          <h3 class="text-lg font-semibold">Server-Side Rendering (SSR)</h3>
        </div>
        <p class="text-gray-600 mb-4">
          This page is rendered on the server for each request, ensuring fresh content and optimal SEO.
        </p>
        <div class="text-sm text-gray-500">
          <p><strong>Use case:</strong> Dynamic content, real-time data</p>
          <p><strong>Performance:</strong> Fast initial load, good SEO</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div class="flex items-center mb-4">
          <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
          <h3 class="text-lg font-semibold">Static Site Generation (SSG)</h3>
        </div>
        <p class="text-gray-600 mb-4">
          Pages are pre-rendered at build time, providing the fastest possible loading experience.
        </p>
        <div class="text-sm text-gray-500">
          <p><strong>Use case:</strong> Static content, marketing pages</p>
          <p><strong>Performance:</strong> Instant loading, excellent SEO</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div class="flex items-center mb-4">
          <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
          <h3 class="text-lg font-semibold">Incremental Static Regeneration (ISR)</h3>
        </div>
        <p class="text-gray-600 mb-4">
          Pages are statically generated but can be updated after deployment without rebuilding.
        </p>
        <div class="text-sm text-gray-500">
          <p><strong>Use case:</strong> Blog posts, product catalogs</p>
          <p><strong>Performance:</strong> Fast loading, fresh content</p>
        </div>
      </div>
    </div>

    <!-- Contentstack Content Section -->
    <div v-if="page" class="bg-white rounded-lg shadow-md border border-gray-200 p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          {{ page.title }} with Nuxt
        </h2>
        <p v-if="page.description" class="text-lg text-gray-600">
          {{ page.description }}
        </p>
      </div>

      <!-- Featured Image -->
      <div v-if="page.image" class="mb-8">
        <img
          :src="page.image.url"
          :alt="page.image.title"
          class="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- Rich Text Content -->
      <div v-if="page.rich_text" class="prose max-w-none">
        <div v-html="page.rich_text"></div>
      </div>

      <!-- Content Blocks -->
      <div v-if="page.blocks && page.blocks.length > 0" class="mt-8 space-y-8">
        <div
          v-for="(item, index) in page.blocks"
          :key="item.block._metadata.uid"
          class="flex flex-col lg:flex-row items-center gap-8 p-6 bg-gray-50 rounded-lg"
          :class="item.block.layout === 'image_left' ? 'lg:flex-row' : 'lg:flex-row-reverse'"
        >
          <!-- Block Image -->
          <div class="lg:w-1/2">
            <img
              v-if="item.block.image"
              :src="item.block.image.url"
              :alt="item.block.image.title"
              class="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
          
          <!-- Block Content -->
          <div class="lg:w-1/2">
            <h3 v-if="item.block.title" class="text-2xl font-bold mb-4 text-gray-900">
              {{ item.block.title }}
            </h3>
            <div v-if="item.block.copy" class="prose" v-html="item.block.copy"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Server Info (demonstrates SSR) -->
    <div class="bg-white rounded-lg shadow-md border border-gray-200 p-6 mt-8">
      <h3 class="text-lg font-semibold mb-4">Server-Side Rendering Demo</h3>
      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <p><strong>Rendered at:</strong> {{ new Date().toLocaleString() }}</p>
          <p><strong>Request time:</strong> {{ requestTime }}ms</p>
        </div>
        <div>
          <p><strong>Mode:</strong> {{ $nuxt.dev ? 'Development' : 'Production' }}</p>
          <p><strong>Server:</strong> {{ serverInfo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: 'Nuxt Starter - Home (SSR)',
  meta: [
    { name: 'description', content: 'A comprehensive Nuxt 3 starter demonstrating SSR, SSG, and ISR rendering strategies' }
  ]
})

// Fetch page data from Contentstack (SSR)
const { data: page } = await useGetPage("/")

// Simulate server-side processing time
const requestTime = Math.floor(Math.random() * 100) + 50
const serverInfo = process.server ? 'Server-side' : 'Client-side'
</script> 