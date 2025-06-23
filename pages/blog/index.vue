<template>
  <div>
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        This page demonstrates Incremental Static Regeneration (ISR). Blog posts are statically generated but can be updated without rebuilding.
      </p>
    </div>

    <!-- ISR Info Card -->
    <div class="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
        <h2 class="text-xl font-semibold text-purple-900">Incremental Static Regeneration (ISR)</h2>
      </div>
      <p class="text-purple-800 mb-4">
        This page uses ISR to provide fast loading while allowing content to be updated. 
        The page is statically generated but can be regenerated in the background when content changes.
      </p>
      <div class="text-sm text-purple-700">
        <p><strong>Last updated:</strong> {{ timedatavar }}</p>
        <p><strong>Rendering strategy:</strong> Incremental Static Regeneration</p>
        <p><strong>Regeneration interval:</strong> 60 seconds</p>
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div v-if="posts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      <article 
        v-for="post in posts" 
        :key="post.slug"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <!-- Post Image -->
        <div v-if="post.image" class="h-48 bg-gray-200">
          <img 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Post Content -->
        <div class="p-6">
          <div class="flex items-center text-sm text-gray-500 mb-3">
            <span>{{ post.date }}</span>
            <span class="mx-2">•</span>
            <span>{{ post.readTime }} min read</span>
          </div>
          
          <h2 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {{ post.title }}
          </h2>
          
          <p class="text-gray-600 mb-4 line-clamp-3">
            {{ post.excerpt }}
          </p>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            
            <NuxtLink 
              :to="`/blog/${post.slug}`"
              class="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Read more →
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-2">No blog posts yet</h3>
      <p class="text-gray-600">Check back soon for new content!</p>
    </div>

    <!-- Categories/Tags -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div class="flex flex-wrap gap-2">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = selectedCategory === category ? null : category"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
          :class="selectedCategory === category 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Newsletter Signup -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
      <h2 class="text-2xl font-bold mb-4">Stay Updated</h2>
      <p class="text-lg mb-6 opacity-90">
        Get notified when we publish new blog posts about Nuxt 3, rendering strategies, and web development.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email"
          class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        >
        <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: 'Blog - Nuxt Starter (ISR)',
  meta: [
    { name: 'description', content: 'Explore our blog posts about Nuxt 3, rendering strategies, and web development' }
  ]
})

// Simulate blog posts data (in a real app, this would come from a CMS or API)
const posts = ref([
  {
    slug: 'getting-started-with-nuxt-3',
    title: 'Getting Started with Nuxt 3: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with Nuxt 3, including SSR, SSG, and ISR strategies for optimal performance.',
    content: 'Full blog post content would go here...',
    date: '2024-01-15',
    readTime: 8,
    tags: ['Nuxt 3', 'Vue.js', 'Tutorial'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
  },
  {
    slug: 'understanding-ssr-ssg-and-isr',
    title: 'Understanding SSR, SSG, and ISR: When to Use Each',
    excerpt: 'A comprehensive guide to different rendering strategies in modern web development and when to use each approach.',
    content: 'Full blog post content would go here...',
    date: '2024-01-10',
    readTime: 12,
    tags: ['Performance', 'SEO', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop'
  },
  {
    slug: 'optimizing-nuxt-performance',
    title: 'Performance Optimization Techniques for Nuxt Applications',
    excerpt: 'Discover advanced techniques to optimize your Nuxt application performance, from code splitting to image optimization.',
    content: 'Full blog post content would go here...',
    date: '2024-01-05',
    readTime: 10,
    tags: ['Performance', 'Optimization', 'Nuxt 3'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
  },
  {
    slug: 'contentstack-nuxt-integration',
    title: 'Integrating Contentstack CMS with Nuxt 3',
    excerpt: 'Learn how to integrate Contentstack headless CMS with Nuxt 3 for a powerful content management solution.',
    content: 'Full blog post content would go here...',
    date: '2024-01-01',
    readTime: 6,
    tags: ['CMS', 'Contentstack', 'Integration'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop'
  },
  {
    slug: 'vue-3-composition-api',
    title: 'Mastering Vue 3 Composition API with Nuxt',
    excerpt: 'Deep dive into Vue 3 Composition API and how to use it effectively in your Nuxt applications.',
    content: 'Full blog post content would go here...',
    date: '2023-12-28',
    readTime: 15,
    tags: ['Vue 3', 'Composition API', 'Advanced'],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop'
  },
  {
    slug: 'deploying-nuxt-applications',
    title: 'Deployment Strategies for Nuxt Applications',
    excerpt: 'Explore different deployment options for Nuxt applications, from Vercel to Docker containers.',
    content: 'Full blog post content would go here...',
    date: '2023-12-25',
    readTime: 9,
    tags: ['Deployment', 'DevOps', 'CI/CD'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop'
  }
])

const categories = ['All', 'Nuxt 3', 'Vue.js', 'Performance', 'CMS', 'Tutorial', 'Advanced']
const selectedCategory = ref(null)

// Simulate last updated time (in a real app, this would come from the CMS)
// const lastUpdated = new Date().toLocaleString()
const { timedata } = await useFetch('/api/data')
const timedatavar = timedata.value.timestamp;

// Filter posts by category
const filteredPosts = computed(() => {
  if (!selectedCategory.value || selectedCategory.value === 'All') {
    return posts.value
  }
  return posts.value.filter(post => post.tags.includes(selectedCategory.value))
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 