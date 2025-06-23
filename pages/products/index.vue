<template>
  <div>
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        This page demonstrates Server-Side Rendering (SSR). Product data is fetched on each request for fresh inventory and pricing.
      </p>
    </div>

    <!-- SSR Info Card -->
    <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
      <div class="flex items-center mb-4">
        <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
        <h2 class="text-xl font-semibold text-green-900">Server-Side Rendering (SSR)</h2>
      </div>
      <p class="text-green-800 mb-4">
        This page is rendered on the server for each request, ensuring you always see the latest product information, 
        inventory levels, and pricing. Perfect for e-commerce applications.
      </p>
      <div class="text-sm text-green-700">
        <p><strong>Last updated:</strong> {{ timedatavar }}</p>
        <p><strong>Rendering strategy:</strong> Server-Side Rendering</p>
        <p><strong>Data freshness:</strong> Real-time</p>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div class="flex flex-col sm:flex-row gap-4 flex-1">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search products..."
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <select 
            v-model="selectedCategory"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">{{ filteredProducts.length }} products</span>
          <select 
            v-model="sortBy"
            class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div v-if="filteredProducts.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <!-- Product Image -->
        <div class="h-48 bg-gray-200 relative">
          <img 
            :src="product.image" 
            :alt="product.name"
            class="w-full h-full object-cover"
          >
          <div v-if="product.discount" class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{{ product.discount }}%
          </div>
          <div v-if="product.stock < 5 && product.stock > 0" class="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-semibold">
            Low Stock
          </div>
        </div>
        
        <!-- Product Info -->
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {{ product.name }}
          </h3>
          
          <div class="flex items-center mb-2">
            <div class="flex items-center">
              <span v-for="star in 5" :key="star" class="text-yellow-400">
                <svg v-if="star <= product.rating" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg v-else class="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </span>
            </div>
            <span class="text-sm text-gray-500 ml-2">({{ product.reviews }})</span>
          </div>
          
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-2">
              <span v-if="product.originalPrice" class="text-lg font-bold text-gray-900">
                ${{ product.price }}
              </span>
              <span v-if="product.originalPrice" class="text-sm text-gray-500 line-through">
                ${{ product.originalPrice }}
              </span>
              <span v-else class="text-lg font-bold text-gray-900">
                ${{ product.price }}
              </span>
            </div>
            <span class="text-sm text-gray-500">{{ product.category }}</span>
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm" :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'">
              {{ product.stock > 0 ? `${product.stock} in stock` : 'Out of stock' }}
            </span>
            <button 
              :disabled="product.stock === 0"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {{ product.stock > 0 ? 'Add to Cart' : 'Sold Out' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-12">
      <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
      <p class="text-gray-600">Try adjusting your search or filter criteria.</p>
    </div>

    <!-- Featured Categories -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div 
          v-for="category in featuredCategories" 
          :key="category.name"
          class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
          @click="selectedCategory = category.name"
        >
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <component :is="category.icon" class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
          <p class="text-gray-600 text-sm">{{ category.count }} products</p>
        </div>
      </div>
    </div>

    <!-- Newsletter Signup -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
      <h2 class="text-2xl font-bold mb-4">Stay Updated</h2>
      <p class="text-lg mb-6 opacity-90">
        Get notified about new products, special offers, and exclusive deals.
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
  title: 'Products - Nuxt Starter (SSR)',
  meta: [
    { name: 'description', content: 'Browse our products with real-time inventory and pricing using Server-Side Rendering' }
  ]
})

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('name')

// Simulate products data (in a real app, this would come from an API)
const products = ref([
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 299.99,
    originalPrice: null,
    discount: 0,
    category: 'Electronics',
    rating: 4.8,
    reviews: 89,
    stock: 3,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    category: 'Clothing',
    rating: 4.2,
    reviews: 56,
    stock: 42,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    originalPrice: null,
    discount: 0,
    category: 'Home & Garden',
    rating: 4.6,
    reviews: 203,
    stock: 0,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Wireless Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    category: 'Electronics',
    rating: 4.3,
    reviews: 167,
    stock: 28,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'Leather Crossbody Bag',
    price: 89.99,
    originalPrice: null,
    discount: 0,
    category: 'Clothing',
    rating: 4.7,
    reviews: 94,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    name: 'Smart Home Security Camera',
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    category: 'Electronics',
    rating: 4.4,
    reviews: 78,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    name: 'Ceramic Coffee Mug Set',
    price: 34.99,
    originalPrice: null,
    discount: 0,
    category: 'Home & Garden',
    rating: 4.1,
    reviews: 45,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop'
  }
])

// Categories
const categories = ['Electronics', 'Clothing', 'Home & Garden']

// Featured categories with icons
const featuredCategories = [
  {
    name: 'Electronics',
    count: products.value.filter(p => p.category === 'Electronics').length,
    icon: 'ComputerDesktopIcon'
  },
  {
    name: 'Clothing',
    count: products.value.filter(p => p.category === 'Clothing').length,
    icon: 'ShirtIcon'
  },
  {
    name: 'Home & Garden',
    count: products.value.filter(p => p.category === 'Home & Garden').length,
    icon: 'HomeIcon'
  }
]

// Simulate last updated time (demonstrates SSR)
// const lastUpdated = new Date().toLocaleString()
const { timedata } = await useFetch('/api/data')
const timedatavar = timedata.value.timestamp;

// Filtered and sorted products
const filteredProducts = computed(() => {
  let filtered = products.value

  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Filter by category
  if (selectedCategory.value) {
    filtered = filtered.filter(product => product.category === selectedCategory.value)
  }

  // Sort products
  switch (sortBy.value) {
    case 'price-low':
      filtered = [...filtered].sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filtered = [...filtered].sort((a, b) => b.price - a.price)
      break
    case 'rating':
      filtered = [...filtered].sort((a, b) => b.rating - a.rating)
      break
    default:
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  }

  return filtered
})

// Icon components
const ComputerDesktopIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>`
}

const ShirtIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
  </svg>`
}

const HomeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>`
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 