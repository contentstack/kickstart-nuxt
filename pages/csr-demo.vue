<template>
  <div>
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Client-Side Rendering Demo</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        This page demonstrates Client-Side Rendering (CSR). Content is loaded and rendered in the browser after JavaScript executes.
      </p>
    </div>

    <!-- CSR Info Card -->
    <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
        <h2 class="text-xl font-semibold text-orange-900">Client-Side Rendering (CSR)</h2>
      </div>
      <p class="text-orange-800 mb-4">
        This page is rendered entirely in the browser. The initial HTML is minimal, and content is loaded and displayed after JavaScript runs.
      </p>
      <div class="text-sm text-orange-700">
        <p><strong>Rendered at:</strong> {{ clientRenderTime }}</p>
        <p><strong>Rendering strategy:</strong> Client-Side Rendering</p>
        <p><strong>JavaScript required:</strong> Yes</p>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="!isLoaded" class="text-center py-12">
      <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p class="text-gray-600">Loading content...</p>
    </div>

    <!-- Dynamic Content -->
    <div v-else class="space-y-8">
      <!-- Real-time Data Section -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Real-time Data</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-3xl font-bold text-blue-600 mb-2">{{ userCount }}</div>
            <p class="text-gray-600">Active Users</p>
          </div>
          <div class="text-center p-4 bg-green-50 rounded-lg">
            <div class="text-3xl font-bold text-green-600 mb-2">{{ messageCount }}</div>
            <p class="text-gray-600">Messages Sent</p>
          </div>
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <div class="text-3xl font-bold text-purple-600 mb-2">{{ sessionTime }}</div>
            <p class="text-gray-600">Session Time (min)</p>
          </div>
        </div>
      </div>

      <!-- Interactive Features -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Interactive Features</h2>
        <div class="space-y-6">
          <!-- Counter -->
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Counter</h3>
              <p class="text-gray-600">Click to increment</p>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-2xl font-bold text-blue-600">{{ counter }}</span>
              <button 
                @click="counter++"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                +1
              </button>
            </div>
          </div>

          <!-- Theme Toggle -->
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Theme Toggle</h3>
              <p class="text-gray-600">Switch between light and dark</p>
            </div>
            <button 
              @click="toggleTheme"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {{ isDarkMode ? '🌞 Light' : '🌙 Dark' }}
            </button>
          </div>

          <!-- Random Quote -->
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-900">Random Quote</h3>
              <p class="text-gray-600 italic">"{{ currentQuote }}"</p>
            </div>
            <button 
              @click="getRandomQuote"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ml-4"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>

      <!-- API Data -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">API Data (Client-side)</h2>
        <div v-if="apiData" class="space-y-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 bg-blue-50 rounded-lg">
              <h3 class="font-semibold text-gray-900 mb-2">User Info</h3>
              <p><strong>Name:</strong> {{ apiData.name }}</p>
              <p><strong>Email:</strong> {{ apiData.email }}</p>
              <p><strong>Status:</strong> {{ apiData.status }}</p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
              <h3 class="font-semibold text-gray-900 mb-2">System Info</h3>
              <p><strong>Version:</strong> {{ apiData.version }}</p>
              <p><strong>Environment:</strong> {{ apiData.environment }}</p>
              <p><strong>Last Updated:</strong> {{ apiData.lastUpdated }}</p>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-8">
          <p class="text-gray-600">Loading API data...</p>
        </div>
      </div>

      <!-- CSR vs SSR Comparison -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">CSR vs SSR Comparison</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Client-Side Rendering (CSR)</h3>
            <ul class="space-y-2 text-gray-600">
              <li>✅ Rich interactivity</li>
              <li>✅ Dynamic content updates</li>
              <li>✅ Real-time features</li>
              <li>❌ Slower initial load</li>
              <li>❌ SEO challenges</li>
              <li>❌ Requires JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Server-Side Rendering (SSR)</h3>
            <ul class="space-y-2 text-gray-600">
              <li>✅ Fast initial load</li>
              <li>✅ Better SEO</li>
              <li>✅ Works without JavaScript</li>
              <li>❌ Less interactive</li>
              <li>❌ Server processing required</li>
              <li>❌ Limited real-time features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: 'CSR Demo - Nuxt Starter (CSR)',
  meta: [
    { name: 'description', content: 'Demonstrating Client-Side Rendering with interactive features and real-time data' }
  ]
})

// Define page meta for CSR
definePageMeta({
  ssr: false // This forces client-side rendering
})

// Reactive data
const isLoaded = ref(false)
const clientRenderTime = ref('')
const counter = ref(0)
const isDarkMode = ref(false)
const userCount = ref(0)
const messageCount = ref(0)
const sessionTime = ref(0)
const apiData = ref(null)
const currentQuote = ref('')

// Sample quotes
const quotes = [
  "The best way to predict the future is to invent it.",
  "Simplicity is the ultimate sophistication.",
  "Code is like humor. When you have to explain it, it's bad.",
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower."
]

// Simulate client-side loading
onMounted(() => {
  console.log('🔄 CSR: Component mounted, starting client-side rendering...')
  
  // Simulate loading delay
  setTimeout(() => {
    console.log('✅ CSR: Content loaded and rendered on client-side')
    isLoaded.value = true
    clientRenderTime.value = new Date().toLocaleString()
    
    // Initialize data
    userCount.value = Math.floor(Math.random() * 1000) + 100
    messageCount.value = Math.floor(Math.random() * 5000) + 1000
    sessionTime.value = Math.floor(Math.random() * 60) + 5
    currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)]
    
    // Simulate API call
    fetchApiData()
    
    // Start real-time updates
    startRealTimeUpdates()
  }, 1500) // 1.5 second delay to show loading state
})

// Simulate API call
const fetchApiData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  apiData.value = {
    name: 'John Doe',
    email: 'john@example.com',
    status: 'Active',
    version: '1.2.3',
    environment: 'Production',
    lastUpdated: new Date().toLocaleString()
  }
}

// Real-time updates
const startRealTimeUpdates = () => {
  setInterval(() => {
    userCount.value += Math.floor(Math.random() * 10) - 5
    messageCount.value += Math.floor(Math.random() * 20)
    sessionTime.value += 1
  }, 5000) // Update every 5 seconds
}

// Interactive functions
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  // In a real app, you'd apply theme changes here
}

const getRandomQuote = () => {
  currentQuote.value = quotes[Math.floor(Math.random() * quotes.length)]
}
</script> 