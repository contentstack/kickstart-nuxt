<template>
  <div>
    <!-- Back to Blog -->
    <div class="mb-8">
      <NuxtLink 
        to="/blog" 
        class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </NuxtLink>
    </div>

    <!-- ISR Info Card -->
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8">
      <div class="flex items-center text-sm text-purple-700">
        <div class="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
        <span>ISR: This page is statically generated but can be updated in the background</span>
      </div>
    </div>

    <!-- Blog Post Content -->
    <article v-if="post" class="max-w-4xl mx-auto">
      <!-- Post Header -->
      <header class="mb-8">
        <div class="flex items-center text-sm text-gray-500 mb-4">
          <span>{{ post.date }}</span>
          <span class="mx-2">•</span>
          <span>{{ post.readTime }} min read</span>
          <span class="mx-2">•</span>
          <span>ISR Generated</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {{ post.title }}
        </h1>
        
        <p class="text-xl text-gray-600 mb-6">
          {{ post.excerpt }}
        </p>
        
        <div class="flex items-center space-x-2 mb-6">
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </header>

      <!-- Featured Image -->
      <div v-if="post.image" class="mb-8">
        <img 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- Post Content -->
      <div class="prose prose-lg max-w-none">
        <div v-html="post.content"></div>
      </div>

      <!-- Post Footer -->
      <footer class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">
            <p>Last updated: {{ timedatavar }}</p>
            <p>Rendering: Incremental Static Regeneration</p>
          </div>
          
          <div class="flex space-x-4">
            <button class="text-gray-500 hover:text-blue-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
              </svg>
            </button>
            <button class="text-gray-500 hover:text-blue-600">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </article>

    <!-- 404 State -->
    <div v-else class="text-center py-12">
      <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
        </svg>
      </div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h2>
      <p class="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
      <NuxtLink 
        to="/blog" 
        class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Back to Blog
      </NuxtLink>
    </div>

    <!-- Related Posts -->
    <div v-if="post && relatedPosts.length > 0" class="mt-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article 
          v-for="relatedPost in relatedPosts" 
          :key="relatedPost.slug"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div v-if="relatedPost.image" class="h-48 bg-gray-200">
            <img 
              :src="relatedPost.image" 
              :alt="relatedPost.title"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {{ relatedPost.title }}
            </h3>
            
            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ relatedPost.excerpt }}
            </p>
            
            <NuxtLink 
              :to="`/blog/${relatedPost.slug}`"
              class="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Read more →
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
// Get the slug from the route
const route = useRoute()
const slug = route.params.slug

// Set page title and meta
useHead({
  title: `Blog Post - Nuxt Starter (ISR)`,
  meta: [
    { name: 'description', content: 'Blog post content demonstrating ISR behavior' }
  ]
})

// Simulate blog posts data (in a real app, this would come from a CMS or API)
const allPosts = [
  {
    slug: 'getting-started-with-nuxt-3',
    title: 'Getting Started with Nuxt 3: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Nuxt 3, including SSR, SSG, and ISR strategies for optimal performance.',
    content: `
      <h2>Introduction</h2>
      <p>Nuxt 3 is the latest version of the popular Vue.js framework that makes it easy to build modern web applications. With its powerful features like server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR), Nuxt 3 provides developers with the tools they need to create fast, SEO-friendly applications.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Vue 3 Support:</strong> Built on top of Vue 3 with Composition API support</li>
        <li><strong>TypeScript:</strong> First-class TypeScript support out of the box</li>
        <li><strong>Auto-imports:</strong> Automatic imports for components, composables, and utilities</li>
        <li><strong>File-based Routing:</strong> Intuitive routing based on your file structure</li>
        <li><strong>Multiple Rendering Modes:</strong> SSR, SSG, and ISR support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To get started with Nuxt 3, you can create a new project using the following command:</p>
      <pre><code>npx nuxi@latest init my-nuxt-app</code></pre>
      
      <p>This will create a new Nuxt 3 project with all the necessary dependencies and configuration files.</p>
      
      <h2>Rendering Strategies</h2>
      <p>Nuxt 3 supports multiple rendering strategies to optimize your application for different use cases:</p>
      
      <h3>Server-Side Rendering (SSR)</h3>
      <p>SSR renders your pages on the server for each request, providing fresh content and optimal SEO. This is perfect for dynamic content that changes frequently.</p>
      
      <h3>Static Site Generation (SSG)</h3>
      <p>SSG pre-renders your pages at build time, providing the fastest possible loading experience. This is ideal for static content like marketing pages and documentation.</p>
      
      <h3>Incremental Static Regeneration (ISR)</h3>
      <p>ISR combines the benefits of both SSR and SSG. Pages are statically generated but can be updated after deployment without rebuilding the entire site.</p>
      
      <h2>Conclusion</h2>
      <p>Nuxt 3 is a powerful framework that makes it easy to build modern web applications. With its support for multiple rendering strategies and excellent developer experience, it's an excellent choice for both small and large projects.</p>
    `,
    date: '2024-01-15',
    readTime: 8,
    tags: ['Nuxt 3', 'Vue.js', 'Tutorial'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
  },
  {
    slug: 'understanding-ssr-ssg-and-isr',
    title: 'Understanding SSR, SSG, and ISR: When to Use Each',
    excerpt: 'A comprehensive guide to different rendering strategies in modern web development and when to use each approach.',
    content: `
      <h2>Introduction</h2>
      <p>Modern web development offers multiple rendering strategies, each with its own advantages and use cases. Understanding when to use Server-Side Rendering (SSR), Static Site Generation (SSG), or Incremental Static Regeneration (ISR) is crucial for building optimal web applications.</p>
      
      <h2>Server-Side Rendering (SSR)</h2>
      <p>SSR renders pages on the server for each request. This approach is ideal for:</p>
      <ul>
        <li>Dynamic content that changes frequently</li>
        <li>User-specific content</li>
        <li>Real-time data</li>
        <li>Applications requiring fresh content on every request</li>
      </ul>
      
      <h2>Static Site Generation (SSG)</h2>
      <p>SSG pre-renders pages at build time. This approach is perfect for:</p>
      <ul>
        <li>Static content like marketing pages</li>
        <li>Documentation sites</li>
        <li>Blog posts that don't change frequently</li>
        <li>Maximum performance requirements</li>
      </ul>
      
      <h2>Incremental Static Regeneration (ISR)</h2>
      <p>ISR combines the benefits of both SSR and SSG. It's ideal for:</p>
      <ul>
        <li>Content that changes occasionally</li>
        <li>E-commerce product pages</li>
        <li>News articles</li>
        <li>Any content that needs to be fresh but doesn't change constantly</li>
      </ul>
      
      <h2>Performance Comparison</h2>
      <p>Here's how the three strategies compare in terms of performance:</p>
      <ul>
        <li><strong>SSR:</strong> Good initial load, requires server processing</li>
        <li><strong>SSG:</strong> Fastest loading, no server processing needed</li>
        <li><strong>ISR:</strong> Fast loading with background updates</li>
      </ul>
    `,
    date: '2024-01-10',
    readTime: 12,
    tags: ['Performance', 'SEO', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop'
  },
  {
    slug: 'optimizing-nuxt-performance',
    title: 'Performance Optimization Techniques for Nuxt Applications',
    excerpt: 'Discover advanced techniques to optimize your Nuxt application performance, from code splitting to image optimization.',
    content: `
      <h2>Introduction</h2>
      <p>Performance is crucial for user experience and SEO. Nuxt 3 provides many built-in optimizations, but there are additional techniques you can implement to further improve your application's performance.</p>
      
      <h2>Code Splitting</h2>
      <p>Nuxt 3 automatically implements code splitting, but you can optimize it further:</p>
      <ul>
        <li>Use dynamic imports for heavy components</li>
        <li>Implement route-based code splitting</li>
        <li>Optimize bundle size with tree shaking</li>
      </ul>
      
      <h2>Image Optimization</h2>
      <p>Images often account for the largest portion of page weight:</p>
      <ul>
        <li>Use the Nuxt Image module</li>
        <li>Implement lazy loading</li>
        <li>Choose appropriate image formats (WebP, AVIF)</li>
        <li>Optimize image sizes for different devices</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      <p>Implement effective caching to improve performance:</p>
      <ul>
        <li>Browser caching for static assets</li>
        <li>CDN caching for global content</li>
        <li>API response caching</li>
        <li>Service worker caching for offline support</li>
      </ul>
    `,
    date: '2024-01-05',
    readTime: 10,
    tags: ['Performance', 'Optimization', 'Nuxt 3'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
  }
]

// Find the current post
const post = computed(() => allPosts.find(p => p.slug === slug))

// Find related posts (posts with similar tags)
const relatedPosts = computed(() => {
  if (!post.value) return []
  
  return allPosts
    .filter(p => p.slug !== slug && p.tags.some(tag => post.value.tags.includes(tag)))
    .slice(0, 3)
})

// Simulate last updated time
// const lastUpdated = new Date().toLocaleString()
const { data } = await useFetch('/api/data')
const timedatavar = data.value.timestamp;

// Update page title when post is found
watchEffect(() => {
  if (post.value) {
    useHead({
      title: `${post.value.title} - Nuxt Starter (ISR)`,
      meta: [
        { name: 'description', content: post.value.excerpt }
      ]
    })
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 