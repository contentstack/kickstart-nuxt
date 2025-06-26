<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Bar -->
    <nav class="bg-white shadow-lg border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold text-gray-900">Nuxt Starter</span>
            </NuxtLink>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
            >
              Home (SSR)
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
            >
              About (SSG)
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
            >
              Blog (ISR)
            </NuxtLink>
            <NuxtLink 
              to="/products" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
            >
              Products (SSR)
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
            >
              Contact (SSG)
            </NuxtLink>
            <NuxtLink 
              to="/csr-demo" 
              class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
            >
              CSR Demo
            </NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="text-gray-700 hover:text-blue-600 p-2 rounded-md"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <NuxtLink 
              to="/" 
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
              @click="mobileMenuOpen = false"
            >
              Home (SSR)
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
              @click="mobileMenuOpen = false"
            >
              About (SSG)
            </NuxtLink>
            <NuxtLink 
              to="/blog" 
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
              @click="mobileMenuOpen = false"
            >
              Blog (ISR)
            </NuxtLink>
            <NuxtLink 
              to="/products" 
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
              @click="mobileMenuOpen = false"
            >
              Products (SSR)
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
              @click="mobileMenuOpen = false"
            >
              Contact (SSG)
            </NuxtLink>
            <NuxtLink 
              to="/csr-demo" 
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              active-class="text-blue-600 bg-blue-50"
              @click="mobileMenuOpen = false"
            >
              CSR Demo
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-600">
          <p>&copy; 2024 Nuxt Starter. Built with Nuxt 3 and Contentstack.</p>
          <p class="mt-2 text-sm">
            This starter demonstrates SSR, SSG, and ISR rendering strategies.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script> 